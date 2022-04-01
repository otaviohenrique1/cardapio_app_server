import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";
import { MensagemCampoVazio } from "../config/utils";
import { Pedido } from "../entity/Pedido";
import pedidoView from "../views/PedidoView";

export default {
  /**
   * Listar todas os pedidos cadastrados
   */
  async index(request: Request, response: Response, next: NextFunction) {
    const pedidoRepository = getRepository(Pedido);
    const pedido = await pedidoRepository.find();
    return response.json(pedido);
  },
  /**
   * Busca um pedido cadastrado usando o codigo do mesmo e exibe os seus dados
   */
  async show(request: Request, response: Response, next: NextFunction) {
    const { codigo } = request.params;
    const usuarioRepository = getRepository(Pedido);
    const usuario = await usuarioRepository.findOneOrFail(codigo);
    return response.json(pedidoView.render(usuario));
  },
  /**
   * Cadastra um pedido
   */
  async create(request: Request, response: Response, next: NextFunction) {
    const { nome, email, senha, codigo, data_cadastro, data_modificacao_cadastro } = request.body;
    const pedidoRepository = getRepository(Pedido);
    const data = { nome, email, senha, codigo, data_cadastro, data_modificacao_cadastro };
    const schema = Yup.object().shape({
      nome: Yup.string().required(MensagemCampoVazio('nome')),
      codigo: Yup.string().required(MensagemCampoVazio('codigo')),
      data_cadastro: Yup.date().required(MensagemCampoVazio('data_cadastro')),
      data_modificacao_cadastro: Yup.date().required(MensagemCampoVazio('data_modificacao_cadastro')),
    });
    await schema.validate(data, { abortEarly: false });
    const pedido = pedidoRepository.create(data);
    await pedidoRepository.save(pedido);
    return response.status(201).json(pedido);
  },
  /**
   * Apaga um pedido, usando o codigo do mesmo
   */
  async delete(request: Request, response: Response, next: NextFunction) {
    const { codigo } = request.params;
    const pedidoRepository = getRepository(Pedido);
    const pedido = await pedidoRepository.delete(codigo);
    return response.status(200).json(pedido);
  },
  /**
   * Atualiza os dados de um pedido, usando o codigo do mesmo para busca-lo no banco de dados
   */
  async update(request: Request, response: Response, next: NextFunction) {
    const { codigo, nome, email, senha, data_modificacao_cadastro } = request.body;
    const pedidoRepository = getRepository(Pedido);
    const data = { nome, email, senha, data_modificacao_cadastro };
    const schema = Yup.object().shape({
      nome: Yup.string().required(MensagemCampoVazio('nome')),
      data_modificacao_cadastro: Yup.date().required(MensagemCampoVazio('data_modificacao_cadastro')),
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const pedido = await pedidoRepository.update(codigo, data);
    return response.status(201).json(pedido);
  },
};
