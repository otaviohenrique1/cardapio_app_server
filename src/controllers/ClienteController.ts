import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";
// import passport from "passport";
// import { Strategy } from "passport-local";
// import { compareSync } from "bcrypt";
import { Cliente } from "../entity/Cliente";
import clienteView from "../views/ClienteView";
import { EMAIL_INVALIDO, LOGADO_COM_SUCESSO, LOGIN_INVALIDO, SENHA_INVALIDO, USUARIO_INVALIDO } from "../utils/constantes";
import { valida_bairro, valida_cep, valida_cidade, valida_data_cadastro, valida_data_modificacao_cadastro, valida_email, valida_estado, valida_nome, valida_numero, valida_rua, valida_senha, valida_telefone } from "../utils/SchemasValidacao";

export default {
  // async login2(request: Request, response: Response, next: NextFunction) {
  //   const { email, senha } = request.body;

  //   passport.use(new Strategy({
  //     usernameField: email,
  //     passwordField: senha
  //   }, async function verify(email, senha, done) {
  //     const clienteRepository = getRepository(Cliente);
  //     const cliente = await clienteRepository.findOne({ email: email });
  //     try {
  //       if (!cliente) return done(null, false, { message: USUARIO_INVALIDO});

  //       const isValid = compareSync(senha, cliente.senha);

  //       if (!isValid) return done(null, false, { message: SENHA_INVALIDO});

  //       return done(null, cliente);
  //     } catch (error) {
  //       done(error, false)
  //     }
  //   }));
  // },
  async login(request: Request, response: Response, next: NextFunction) {
    const { email, senha } = request.body;
    let existingUser: any;
    const clienteRepository = getRepository(Cliente);

    try {
      existingUser = await clienteRepository
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
   * Listar todas os clientes cadastrados
   */
  async index(request: Request, response: Response, next: NextFunction) {
    const clienteRepository = getRepository(Cliente);
    const cliente = await clienteRepository.find();
    return response.json(cliente);
  },
  /**
   * Busca um cliente cadastrado usando o id do mesmo e exibe os seus dados
   */
  async show(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;
    const clienteRepository = getRepository(Cliente);
    const cliente = await clienteRepository.findOneOrFail(id);
    return response.json(clienteView.render(cliente));
  },
  /**
   * Cadastra um cliente
   */
  async create(request: Request, response: Response, next: NextFunction) {
    const { nome, data_cadastro, data_modificacao_cadastro, rua, numero, bairro, cidade, estado, cep, telefone, email, senha } = request.body;
    const clienteRepository = getRepository(Cliente);
    const data = { nome, data_cadastro, data_modificacao_cadastro, rua, numero, bairro, cidade, estado, cep, telefone, email, senha };

    const schema = Yup
      .object()
      .shape({
        nome: valida_nome,
        rua: valida_rua,
        numero: valida_numero,
        bairro: valida_bairro,
        cidade: valida_cidade,
        estado: valida_estado,
        cep: valida_cep,
        telefone: valida_telefone,
        email: valida_email,
        senha: valida_senha,
        data_cadastro: valida_data_cadastro,
        data_modificacao_cadastro: valida_data_modificacao_cadastro,
      });

    await schema.validate(data, { abortEarly: false });
    const cliente = clienteRepository.create(data);
    await clienteRepository.save(cliente);

    return response
      .status(201)
      .json(cliente);
  },
  /**
   * Apaga um cliente, usando o id do mesmo
   */
  // async delete(request: Request, response: Response, next: NextFunction) {
  //   const { id } = request.params;
  //   const clienteRepository = getRepository(Cliente);
  //   const cliente = await clienteRepository.delete(id);
  //   return response
  //     .status(200)
  //     .json(cliente);
  // },
  /**
   * Atualiza os dados de um cliente, usando o id do mesmo para busca-lo no banco de dados
   */
  async update(request: Request, response: Response, next: NextFunction) {
    const { id, nome, data_modificacao_cadastro, rua, numero, bairro, cidade, estado, cep, telefone, email, senha } = request.body;
    const clienteRepository = getRepository(Cliente);
    const data = { nome, data_modificacao_cadastro, rua, numero, bairro, cidade, estado, cep, telefone, email, senha };

    const schema = Yup
      .object()
      .shape({
        nome: valida_nome,
        rua: valida_rua,
        numero: valida_numero,
        bairro: valida_bairro,
        cidade: valida_cidade,
        estado: valida_estado,
        cep: valida_cep,
        telefone: valida_telefone,
        email: valida_email,
        senha: valida_senha,
        data_modificacao_cadastro: valida_data_modificacao_cadastro,
      });

    await schema.validate(data, { abortEarly: false });
    const cliente = await clienteRepository.update(id, data);

    return response
      .status(201)
      .json(cliente);
  },
};
