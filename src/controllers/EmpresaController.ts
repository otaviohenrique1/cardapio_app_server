import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";
import { EMAIL_INVALIDO, LOGADO_COM_SUCESSO, LOGIN_INVALIDO, SENHA_INVALIDO, USUARIO_INVALIDO } from "../config/constantes";
import { MensagemCampoVazio } from "../config/utils";
import { Empresa } from "../entity/Empresa";
import empresaView from "../views/EmpresaView";

export default {
  /**
   * Busca e valida o login do empresa
   */
  async login(request: Request, response: Response, next: NextFunction) {
    const { email, senha } = request.body;
    let existingUser: any;
    const empresaRepository = getRepository(Empresa);
    try {
      existingUser = await empresaRepository.findOne({ email: email });
    } catch (error) {
      return response.status(500).json({ message: LOGIN_INVALIDO });
    }

    if (!existingUser) {
      return response.status(401).json({ message: USUARIO_INVALIDO });
    } else if (existingUser.senha !== senha) {
      return response.status(401).json({ message: SENHA_INVALIDO });
    } else if (existingUser.email !== email) {
      return response.status(401).json({ message: EMAIL_INVALIDO });
    }
    let data_user = {
      id: existingUser.id,
      nome: existingUser.nome,
      email: existingUser.email,
      codigo: existingUser.codigo,
    };
    return response.status(200).json({ message: LOGADO_COM_SUCESSO, data_user });
  },
  /**
   * Listar todas os empresas cadastradas
   */
  async index(request: Request, response: Response, next: NextFunction) {
    const empresaRepository = getRepository(Empresa);
    const empresa = await empresaRepository.find();
    return response.json(empresa);
  },
  /**
   * Busca um empresa cadastrada usando o id da mesma e exibe os seus dados
   */
  async show(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;
    const empresaRepository = getRepository(Empresa);
    const empresa = await empresaRepository.findOneOrFail(id);
    return response.json(empresaView.render(empresa));
  },
  /**
   * Cadastra uma empresa
   */
  async create(request: Request, response: Response, next: NextFunction) {
    const { nome, email, senha, status_cadastro, data_cadastro, data_modificacao_cadastro } = request.body;
    const empresaRepository = getRepository(Empresa);
    const data = { nome, email, senha, status_cadastro, data_cadastro, data_modificacao_cadastro };
    const schema = Yup.object().shape({
      nome: Yup.string().required(MensagemCampoVazio('nome')),
      email: Yup.string().email(EMAIL_INVALIDO).required(MensagemCampoVazio('email')),
      senha: Yup.string().required(MensagemCampoVazio('senha')),
      status_cadastro: Yup.boolean().required(MensagemCampoVazio('status_cadastro')),
      data_cadastro: Yup.date().required(MensagemCampoVazio('data_cadastro')),
      data_modificacao_cadastro: Yup.date().required(MensagemCampoVazio('data_modificacao_cadastro')),
    });
    await schema.validate(data, { abortEarly: false });
    const empresa = empresaRepository.create(data);
    await empresaRepository.save(empresa);
    return response.status(201).json(empresa);
  },
  /**
   * Apaga uma empresa, usando o id da mesma
   */
  async delete(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;
    const empresaRepository = getRepository(Empresa);
    const empresa = await empresaRepository.delete(id);
    return response.status(200).json(empresa);
  },
  /**
   * Atualiza os dados de uma empresa, usando o id da mesma para busca-lo no banco de dados
   */
  async update(request: Request, response: Response, next: NextFunction) {
    const { id, nome, email, senha, status_cadastro, data_modificacao_cadastro } = request.body;
    const empresaRepository = getRepository(Empresa);
    const data = { nome, email, senha, status_cadastro, data_modificacao_cadastro };
    const schema = Yup.object().shape({
      nome: Yup.string().required(MensagemCampoVazio('nome')),
      email: Yup.string().email(EMAIL_INVALIDO).required(MensagemCampoVazio('email')),
      senha: Yup.string().required(MensagemCampoVazio('senha')),
      status_cadastro: Yup.boolean().required(MensagemCampoVazio('status_cadastro')),
      data_modificacao_cadastro: Yup.date().required(MensagemCampoVazio('data_modificacao_cadastro')),
    });
    await schema.validate(data, { abortEarly: false });
    const empresa = await empresaRepository.update(id, data);
    return response.status(201).json(empresa);
  },
};
