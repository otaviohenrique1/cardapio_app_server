import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";
import { EMAIL_INVALIDO, LOGADO_COM_SUCESSO, LOGIN_INVALIDO, SENHA_INVALIDO, USUARIO_INVALIDO } from "../config/constantes";
import { MensagemCampoVazio } from "../config/utils";
import Usuario from "../entity/Usuario";
import usuarioView from "../views/UsuarioView";

export default {
  async login(request: Request, response: Response, next: NextFunction) {
    const { email, senha } = request.body;
    let existingUser: any;
    const usuarioRepository = getRepository(Usuario);
    try {
      existingUser = await usuarioRepository.findOne({ email: email });
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
    };
    return response.status(200).json({ message: LOGADO_COM_SUCESSO, data_user });
  },
  async index(request: Request, response: Response, next: NextFunction) {
    const veiculoRepository = getRepository(Usuario);
    const veiculo = await veiculoRepository.find();
    return response.json(veiculo);
  },
  async show(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;
    const usuarioRepository = getRepository(Usuario);
    const usuario = await usuarioRepository.findOneOrFail(id);
    return response.json(usuarioView.render(usuario));
  },
  async create(request: Request, response: Response, next: NextFunction) {
    const { nome, email, senha, codigo, data_cadastro, data_modificacao_cadastro } = request.body;
    const usuarioRepository = getRepository(Usuario);
    const data = { nome, email, senha, codigo, data_cadastro, data_modificacao_cadastro };
    const schema = Yup.object().shape({
      nome: Yup.string().required(MensagemCampoVazio('nome')),
      email: Yup.string().email(EMAIL_INVALIDO).required(MensagemCampoVazio('email')),
      senha: Yup.string().required(MensagemCampoVazio('senha')),
      codigo: Yup.string().required(MensagemCampoVazio('codigo')),
      data_cadastro: Yup.date().required(MensagemCampoVazio('data_cadastro')),
      data_modificacao_cadastro: Yup.date().required(MensagemCampoVazio('data_modificacao_cadastro')),
    });
    await schema.validate(data, { abortEarly: false });
    const usuario = usuarioRepository.create(data);
    await usuarioRepository.save(usuario);
    return response.status(201).json(usuario);
  },
  async delete(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;
    const UsuarioRepository = getRepository(Usuario);
    const usuario = await UsuarioRepository.delete(id);
    return response.status(200).json(usuario);
  },
  async update(request: Request, response: Response, next: NextFunction) {
    const { id, nome, email, senha, data_modificacao_cadastro } = request.body;
    const usuarioRepository = getRepository(Usuario);
    const data = { nome, email, senha, data_modificacao_cadastro };
    const schema = Yup.object().shape({
      nome: Yup.string().required(MensagemCampoVazio('nome')),
      email: Yup.string().email(EMAIL_INVALIDO).required(MensagemCampoVazio('email')),
      senha: Yup.string().required(MensagemCampoVazio('senha')),
      data_modificacao_cadastro: Yup.date().required(MensagemCampoVazio('data_modificacao_cadastro')),
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const usuario = await usuarioRepository.update(id, data);
    return response.status(201).json(usuario);
  },
};

/*
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";
import Usuario from "../entity/Usuario";
import usuarioView from "../views/UsuarioView";

export default {
  async login(request: Request, response: Response) {
    const { email, senha } = request.body;
    let existingUser: any;
    const usuarioRepository = getRepository(Usuario);
    try {
      existingUser = await usuarioRepository.findOne({ email: email });
    } catch (error) {
      const mensagemErro = "Login falhou, tente novamente mais tarde";
      return response.status(500).json({ message: mensagemErro });
    }

    let mensagemErroLista = [];

    if (!existingUser || existingUser.senha !== senha) {
      const mensagemErro = "Senha invalida";
      return response.status(401).json({ message: mensagemErro });
    } else if (!existingUser || existingUser.email !== email) {
      const mensagemErro = "Email invalido";
      return response.status(401).json({ message: mensagemErro });
    }
    let data_user = {
      id: existingUser.id,
      nome: existingUser.nome,
      email: existingUser.email,
    };
    return response.status(200).json({ message: "Logado com sucesso!", data_user });
  },
  async index(request: Request, response: Response) {
    const veiculoRepository = getRepository(Usuario);
    const veiculo = await veiculoRepository.find();
    return response.json(veiculo);
  },
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const usuarioRepository = getRepository(Usuario);
    const usuario = await usuarioRepository.findOneOrFail(id);
    return response.json(usuarioView.render(usuario));
  },
  async create(request: Request, response: Response) {
    const { nome, email, senha, data_cadastro } = request.body;
    const usuarioRepository = getRepository(Usuario);
    const data = { nome, email, senha, data_cadastro };
    const schema = Yup.object().shape({
      nome: Yup.string().required('Campo vazio'),
      email: Yup.string().email('Email invalido').required('Campo vazio'),
      senha: Yup.string().required('Campo vazio'),
      data_cadastro: Yup.date().required('Campo vazio')
    });
    await schema.validate(data, { abortEarly: false });
    const usuario = usuarioRepository.create(data);
    await usuarioRepository.save(usuario);
    return response.status(201).json(usuario);
  },
  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const UsuarioRepository = getRepository(Usuario);
    const usuario = await UsuarioRepository.delete(id);
    return response.status(200).json(usuario);
  },
  async update(request: Request, response: Response) {
    const { id, nome, email, senha } = request.body;
    const usuarioRepository = getRepository(Usuario);
    const data = { nome, email, senha };
    const schema = Yup.object().shape({
      nome: Yup.string().required('Campo vazio'),
      email: Yup.string().email('Email invalido').required('Campo vazio'),
      senha: Yup.string().required('Campo vazio'),
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const usuario = await usuarioRepository.update(id, data);
    return response.status(201).json(usuario);
  },
};
*/