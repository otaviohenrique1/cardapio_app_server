import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";
import { valida_ativo, valida_data_cadastro, valida_data_modificacao_cadastro, valida_descricao, valida_imagens, valida_ingredientes, valida_nome, valida_preco } from "../utils/SchemasValidacao";
import Refeicao from "../entity/Refeicao";
import refeicaoView from "../views/RefeicaoView";

export default {
  /**
   * Listar todas as refeicoes cadastradas (Rota de teste)
   */
  async index_catalogo_teste(request: Request, response: Response, next: NextFunction) {
    const refeicaoRepository = getRepository(Refeicao);

    const refeicao = await refeicaoRepository.find();

    return response.json(refeicaoView.renderMany(refeicao));
  },
  /**
   * Listar todas as refeicoes cadastradas pelo usuario, usando o id do mesmo
   */
  async index(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;

    const refeicaoRepository = getRepository(Refeicao);

    const refeicao = await refeicaoRepository.find({
      // join: {},
      where: { usuario: { id: id } },
      relations: ['imagens'],
    });

    return response.json(refeicaoView.renderMany(refeicao));
  },
  /**
   * Busca uma refeicao cadastrada usando o id da mesma e exibe os seus dados
   */
  async show(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;

    const refeicaoRepository = getRepository(Refeicao);

    const refeicao = await refeicaoRepository.findOneOrFail(id, { relations: ['imagens'] });

    return response.json(refeicaoView.render(refeicao));
  },
  /**
   * Cadastrada uma refeicao
   */
  async create(request: Request, response: Response, next: NextFunction) {
    const { nome, preco, ingredientes, descricao, ativo, data_cadastro, data_modificacao_cadastro } = request.body;

    const refeicaoRepository = getRepository(Refeicao);

    const requestImagens = request.files as Express.Multer.File[];

    const imagens = requestImagens.map((imagem) => {
      return { path: imagem.filename };
    });

    const data = { nome, preco, ingredientes, descricao, ativo, data_cadastro, data_modificacao_cadastro, imagens };

    const schema = Yup
      .object()
      .shape({
        nome: valida_nome,
        preco: valida_preco,
        ingredientes: valida_ingredientes,
        descricao: valida_descricao,
        ativo: valida_ativo,
        imagens: valida_imagens,
        data_cadastro: valida_data_cadastro,
        data_modificacao_cadastro: valida_data_modificacao_cadastro,
      });

    await schema.validate(data, { abortEarly: false });

    const refeicao = refeicaoRepository.create(data);

    await refeicaoRepository.save(refeicao);

    return response
      .status(201)
      .json(refeicao);
  },
  /**
   * Apaga uma refeicao, usando o id da mesma
   */
  async delete(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;

    const refeicaoRepository = getRepository(Refeicao);

    const refeicao = await refeicaoRepository.delete(id);

    return response
      .status(200)
      .json(refeicao);
  },
  /**
   * Atualiza os dados de uma refeicao, usando o id da mesma para busca-la no banco de dados
   */
  async update(request: Request, response: Response, next: NextFunction) {
    const { id, nome, preco, ingredientes, descricao, ativo } = request.body;

    const refeicaoRepository = getRepository(Refeicao);

    const requestImagens = request.files as Express.Multer.File[];

    const imagens = requestImagens.map((imagem) => {
      return { path: imagem.filename };
    });

    const data = { nome, preco, ingredientes, ativo, descricao, imagens };

    const schema = Yup
      .object()
      .shape({
        nome: valida_nome,
        preco: valida_preco,
        ingredientes: valida_ingredientes,
        descricao: valida_descricao,
        ativo: valida_ativo,
        imagens: valida_imagens,
        data_modificacao_cadastro: valida_data_modificacao_cadastro,
      });

    await schema.validate(data, { abortEarly: false });

    const refeicao = await refeicaoRepository.update(id, data);

    return response
      .status(201)
      .json(refeicao);
  },
};
