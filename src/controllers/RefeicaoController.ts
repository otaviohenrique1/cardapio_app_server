import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";
import Refeicao from "../entity/Refeicao";
import refeicaoView from "../views/RefeicaoView";

export default {
  async index(request: Request, response: Response) {
    const refeicaoRepository = getRepository(Refeicao);
    const refeicao = await refeicaoRepository.find();
    return response.json(refeicao);
  },
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const refeicaoRepository = getRepository(Refeicao);
    const refeicao = await refeicaoRepository.findOneOrFail(id);
    return response.json(refeicaoView.render(refeicao));
  },
  async create(request: Request, response: Response) {
    const { nome, preco, ingredientes, ativo, id_usuario, data_cadastro } = request.body;
    const refeicaoRepository = getRepository(Refeicao);
    const data = { nome, preco, ingredientes, ativo, id_usuario, data_cadastro };
    const schema = Yup.object().shape({
      nome: Yup.string().required('Campo vazio'),
      preco: Yup.number().required('Campo vazio'),
      ingredientes: Yup.string().required('Campo vazio'),
      ativo: Yup.boolean().required('Campo vazio'),
      id_usuario: Yup.number().required('Campo vazio'),
      data_cadastro: Yup.date().required('Campo vazio'),
    });
    await schema.validate(data, { abortEarly: false });
    const refeicao = refeicaoRepository.create(data);
    await refeicaoRepository.save(refeicao);
    return response.status(201).json(refeicao);
  },
  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const refeicaoRepository = getRepository(Refeicao);
    const refeicao = await refeicaoRepository.delete(id);
    return response.status(200).json(refeicao);
  },
  async update(request: Request, response: Response) {
    const { id, nome, preco, ingredientes, ativo } = request.body;
    const refeicaoRepository = getRepository(Refeicao);
    const data = { nome, preco, ingredientes, ativo };
    const schema = Yup.object().shape({
      nome: Yup.string().required('Campo vazio'),
      preco: Yup.number().required('Campo vazio'),
      ingredientes: Yup.string().required('Campo vazio'),
      ativo: Yup.boolean().required('Campo vazio'),
    });
    await schema.validate(data, { abortEarly: false });
    const refeicao = await refeicaoRepository.update(id, data);
    return response.status(201).json(refeicao);
  },
};
