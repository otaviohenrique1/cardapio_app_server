import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";
import Usuario from "../entities/Usuario";
import usuarioView from "../views/UsuarioView";

export default {
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
