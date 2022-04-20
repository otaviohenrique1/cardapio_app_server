import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";
import Usuario from "../entity/Usuario";
import usuarioView from "../views/UsuarioView";
import { EMAIL_INVALIDO, LOGADO_COM_SUCESSO, LOGIN_INVALIDO, SENHA_INVALIDO, USUARIO_INVALIDO } from "../utils/constantes";
import { valida_data_cadastro, valida_data_modificacao_cadastro, valida_email, valida_nome, valida_senha } from "../utils/SchemasValidacao";

export default {
  /**
   * Busca e valida o login do usuario
   */
  async login(request: Request, response: Response, next: NextFunction) {
    const { email, senha } = request.body;
    let existingUser: any;
    const usuarioRepository = getRepository(Usuario);

    try {
      existingUser = await usuarioRepository
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
   * Listar todas os usuarios cadastrados
   */
  async index(request: Request, response: Response, next: NextFunction) {
    const usuarioRepository = getRepository(Usuario);
    const usuario = await usuarioRepository.find();
    return response.json(usuario);
  },
  /**
   * Busca um usuario cadastrado usando o id do mesmo e exibe os seus dados
   */
  async show(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;
    const usuarioRepository = getRepository(Usuario);
    const usuario = await usuarioRepository.findOneOrFail(id, { where: { id: id } });
    return response.json(usuarioView.render(usuario));
  },
  /**
   * Cadastra um usuario
   */
  async create(request: Request, response: Response, next: NextFunction) {
    const { nome, email, senha, data_cadastro, data_modificacao_cadastro } = request.body;
    const usuarioRepository = getRepository(Usuario);
    const data = { nome, email, senha, data_cadastro, data_modificacao_cadastro };

    const schema = Yup
      .object()
      .shape({
        nome: valida_nome,
        email: valida_email,
        senha: valida_senha,
        data_cadastro: valida_data_cadastro,
        data_modificacao_cadastro: valida_data_modificacao_cadastro,
      });

    await schema.validate(data, { abortEarly: false });
    const usuario = usuarioRepository.create(data);
    await usuarioRepository.save(usuario);

    return response
      .status(201)
      .json(usuario);
  },
  /**
   * Apaga um usuario, usando o id do mesmo
   */
  async delete(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;
    const UsuarioRepository = getRepository(Usuario);
    const usuario = await UsuarioRepository.delete(id);

    return response
      .status(200)
      .json(usuario);
  },
  /**
   * Atualiza os dados de um usuario, usando o id do mesmo para busca-lo no banco de dados
   */
  async update(request: Request, response: Response, next: NextFunction) {
    const { id, nome, email, senha, data_modificacao_cadastro } = request.body;
    const usuarioRepository = getRepository(Usuario);
    const data = { nome, email, senha, data_modificacao_cadastro };

    const schema = Yup
      .object()
      .shape({
        nome: valida_nome,
        email: valida_email,
        senha: valida_senha,
        data_modificacao_cadastro: valida_data_modificacao_cadastro,
      });

    await schema.validate(data, { abortEarly: false });
    const usuario = await usuarioRepository.update(id, data);

    return response
      .status(201)
      .json(usuario);
  },
};
