import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";
import { MensagemCampoVazio } from "../config/utils";
import { Cliente } from "../entity/Cliente";
import clienteView from "../views/ClienteView";

export default {
  /**
   * Listar todas os pedidos cadastrados
   */
  async index(request: Request, response: Response, next: NextFunction) {
    const clienteRepository = getRepository(Cliente);
    const cliente = await clienteRepository.find();
    return response.json(cliente);
  },
  /**
   * Busca um pedido cadastrado usando o codigo do mesmo e exibe os seus dados
   */
  async show(request: Request, response: Response, next: NextFunction) {
    const { codigo } = request.params;
    const clienteRepository = getRepository(Cliente);
    const cliente = await clienteRepository.findOneOrFail(codigo);
    return response.json(clienteView.render(cliente));
  },
  /**
   * Cadastra um pedido
   */
  async create(request: Request, response: Response, next: NextFunction) {
    const { nome, data_cadastro, data_modificacao_cadastro, rua, numero, bairro, cidade, estado, cep, telefone, email, senha } = request.body;
    const clienteRepository = getRepository(Cliente);
    const data = { nome, data_cadastro, data_modificacao_cadastro, rua, numero, bairro, cidade, estado, cep, telefone, email, senha };
    const schema = Yup.object().shape({
      nome: Yup.string().required(MensagemCampoVazio('nome')),
      rua: Yup.string().required(MensagemCampoVazio('rua')),
      numero: Yup.string().required(MensagemCampoVazio('numero')),
      bairro: Yup.string().required(MensagemCampoVazio('bairro')),
      cidade: Yup.string().required(MensagemCampoVazio('cidade')),
      estado: Yup.string().required(MensagemCampoVazio('estado')),
      cep: Yup.string().required(MensagemCampoVazio('cep')),
      telefone1: Yup.string().required(MensagemCampoVazio('telefone')),
      email: Yup.string().required(MensagemCampoVazio('email')),
      senha: Yup.string().required(MensagemCampoVazio('senha')),
      data_cadastro: Yup.date().required(MensagemCampoVazio('data_cadastro')),
      data_modificacao_cadastro: Yup.date().required(MensagemCampoVazio('data_modificacao_cadastro')),
    });
    await schema.validate(data, { abortEarly: false });
    const cliente = clienteRepository.create(data);
    await clienteRepository.save(cliente);
    return response.status(201).json(cliente);
  },
  /**
   * Apaga um pedido, usando o codigo do mesmo
   */
  // async delete(request: Request, response: Response, next: NextFunction) {
  //   const { codigo } = request.params;
  //   const clienteRepository = getRepository(Cliente);
  //   const cliente = await clienteRepository.delete(codigo);
  //   return response.status(200).json(cliente);
  // },
  /**
   * Atualiza os dados de um pedido, usando o codigo do mesmo para busca-lo no banco de dados
   */
  async update(request: Request, response: Response, next: NextFunction) {
    const { codigo, nome, data_modificacao_cadastro, rua, numero, bairro, cidade, estado, cep, telefone, email, senha } = request.body;
    const clienteRepository = getRepository(Cliente);
    const data = { nome, data_modificacao_cadastro, rua, numero, bairro, cidade, estado, cep, telefone, email, senha };
    const schema = Yup.object().shape({
      nome: Yup.string().required(MensagemCampoVazio('nome')),
      rua: Yup.string().required(MensagemCampoVazio('rua')),
      numero: Yup.string().required(MensagemCampoVazio('numero')),
      bairro: Yup.string().required(MensagemCampoVazio('bairro')),
      cidade: Yup.string().required(MensagemCampoVazio('cidade')),
      estado: Yup.string().required(MensagemCampoVazio('estado')),
      cep: Yup.string().required(MensagemCampoVazio('cep')),
      telefone1: Yup.string().required(MensagemCampoVazio('telefone')),
      email: Yup.string().required(MensagemCampoVazio('email')),
      senha: Yup.string().required(MensagemCampoVazio('senha')),
      data_modificacao_cadastro: Yup.date().required(MensagemCampoVazio('data_modificacao_cadastro')),
    });
    await schema.validate(data, { abortEarly: false });
    const cliente = await clienteRepository.update(codigo, data);
    return response.status(201).json(cliente);
  },
};
