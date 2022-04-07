import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";
import { MensagemCampoVazio } from "../config/utils";
import Refeicao from "../entity/Refeicao";
import refeicaoView from "../views/RefeicaoView";

export default {
  /**
   * Listar todas as refeicoes cadastradas pelo usuario, usando o id do mesmo
   */
  async index(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;

    const refeicaoRepository = getRepository(Refeicao);
    const refeicao = await refeicaoRepository.find({
      // join: {},
      where: { usuario: {id: id} },
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
    const schema = Yup.object().shape({
      nome: Yup.string().required(MensagemCampoVazio('nome')),
      preco: Yup.number().required(MensagemCampoVazio('preco')),
      ingredientes: Yup.string().required(MensagemCampoVazio('ingredientes')),
      descricao: Yup.string().required(MensagemCampoVazio('descricao')),
      ativo: Yup.boolean().required(MensagemCampoVazio('ativo')),
      data_cadastro: Yup.date().required(MensagemCampoVazio('data_cadastro')),
      data_modificacao_cadastro: Yup.date().required(MensagemCampoVazio('data_modificacao_cadastro')),
      imagens: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(MensagemCampoVazio('path'))
        })
      )
    });
    await schema.validate(data, { abortEarly: false });
    const refeicao = refeicaoRepository.create(data);
    await refeicaoRepository.save(refeicao);
    return response.status(201).json(refeicao);
  },
  /**
   * Apaga uma refeicao, usando o id da mesma
   */
  async delete(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;
    const refeicaoRepository = getRepository(Refeicao);
    const refeicao = await refeicaoRepository.delete(id);
    return response.status(200).json(refeicao);
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
    const schema = Yup.object().shape({
      nome: Yup.string().required(MensagemCampoVazio('nome')),
      preco: Yup.number().required(MensagemCampoVazio('preco')),
      ingredientes: Yup.string().required(MensagemCampoVazio('ingredientes')),
      descricao: Yup.string().required(MensagemCampoVazio('descricao')),
      ativo: Yup.boolean().required(MensagemCampoVazio('ativo')),
      imagem: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(MensagemCampoVazio('path'))
        })
      )
    });
    await schema.validate(data, { abortEarly: false });
    const refeicao = await refeicaoRepository.update(id, data);
    return response.status(201).json(refeicao);
  },
};
