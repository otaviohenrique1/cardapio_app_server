import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";
import { Administrador } from "../entity/Administrador";
import administradorView from "../views/AdministradorView";
import { EMAIL_INVALIDO, LOGADO_COM_SUCESSO, LOGIN_INVALIDO, SENHA_INVALIDO, USUARIO_INVALIDO } from "../utils/constantes";
import { valida_data_cadastro, valida_data_modificacao_cadastro, valida_email, valida_nome, valida_senha } from "../utils/SchemasValidacao";

export default {
  /**
   * Busca e valida o login do administrador
   */
  async login(request: Request, response: Response, next: NextFunction) {
    const { email, senha } = request.body;
    let existingUser: any;
    const administradorRepository = getRepository(Administrador);
    try {
      existingUser = await administradorRepository
        .findOne({ email: email });
    } catch (error) {
      return response
        .status(500)
        .json({ message: LOGIN_INVALIDO });
    }

    if (!existingUser) {
      return response
        .status(401)
        .json({ message: USUARIO_INVALIDO });
    } else if (existingUser.senha !== senha) {
      return response
        .status(401)
        .json({ message: SENHA_INVALIDO });
    } else if (existingUser.email !== email) {
      return response
        .status(401)
        .json({ message: EMAIL_INVALIDO });
    }

    let data_user = {
      id: existingUser.id,
      nome: existingUser.nome,
      email: existingUser.email,
      codigo: existingUser.codigo,
    };
    return response
      .status(200)
      .json({ message: LOGADO_COM_SUCESSO, data_user });
  },
  /**
   * Listar todas os administradores cadastrados
   */
  async index(request: Request, response: Response, next: NextFunction) {
    const administradorRepository = getRepository(Administrador);
    const administrador = await administradorRepository.find();
    return response.json(administrador);
  },
  /**
   * Busca um administrador cadastrado usando o id do mesmo e exibe os seus dados
   */
  async show(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;
    const administradorRepository = getRepository(Administrador);
    const administrador = await administradorRepository.findOneOrFail(id);
    return response.json(administradorView.render(administrador));
  },
  /**
   * Cadastra um administrador
   */
  async create(request: Request, response: Response, next: NextFunction) {
    const { nome, email, senha, data_cadastro, data_modificacao_cadastro } = request.body;
    const administradorRepository = getRepository(Administrador);
    const data = { nome, email, senha, data_cadastro, data_modificacao_cadastro };

    const schema = Yup.object().shape({
      nome: valida_nome,
      email: valida_email,
      senha: valida_senha,
      data_cadastro: valida_data_cadastro,
      data_modificacao_cadastro: valida_data_modificacao_cadastro,
    });

    await schema.validate(data, { abortEarly: false });
    const administrador = administradorRepository.create(data);
    await administradorRepository.save(administrador);

    return response
      .status(201)
      .json(administrador);
  },
  /**
   * Apaga um administrador, usando o id do mesmo
   */
  async delete(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;
    const administradorRepository = getRepository(Administrador);
    const administrador = await administradorRepository.delete(id);
    return response
      .status(200)
      .json(administrador);
  },
  /**
   * Atualiza os dados de um administrador, usando o id do mesmo para busca-lo no banco de dados
   */
  async update(request: Request, response: Response, next: NextFunction) {
    const { id, nome, email, senha, data_modificacao_cadastro } = request.body;
    const administradorRepository = getRepository(Administrador);
    const data = { nome, email, senha, data_modificacao_cadastro };

    const schema = Yup.object().shape({
      nome: valida_nome,
      email: valida_email,
      senha: valida_senha,
      data_modificacao_cadastro: valida_data_cadastro,
    });

    await schema.validate(data, { abortEarly: false });
    const administrador = await administradorRepository.update(id, data);

    return response
      .status(201)
      .json(administrador);
  },
};
