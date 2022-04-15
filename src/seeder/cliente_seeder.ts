import { Cliente } from "../entity/Cliente";
import { gerador_seeder_insert } from "./gerador_seeder";

export const cliente_1 = {
  id: 1,
  nome: 'Zeca',
  rua: 'Rua do centro',
  numero: '50',
  bairro: 'Centro',
  cidade: 'Cachoeira Paulista',
  estado: 'São Paulo',
  cep: '12630000',
  codigo: 'dcbde0ba-645d-4c07-b9a2-1d5ed38d1e29',
  data_cadastro: '2022-04-06 15:42:15',
  data_modificacao_cadastro: '2022-04-06 15:42:15',
  email: 'zeca@email.com',
  senha: 'bb96c2fc40d2d54617d6f276febe571f623a8dadf0b734855299b0e107fda32cf6b69f2da32b36445d73690b93cbd0f7bfc20e0f7f28553d2a4428f23b716e90',
  telefone: '12999999999999'
};

export const cliente_2 = {
  id: 2,
  nome: 'Ana',
  rua: 'Rua do centro',
  numero: '78',
  bairro: 'Centro',
  cidade: 'Cachoeira Paulista',
  estado: 'São Paulo',
  cep: '12630000',
  codigo: 'aff42dbd-c425-4d98-916c-6edbfa4bf152',
  data_cadastro: '2022-04-07 21:00:00',
  data_modificacao_cadastro: '2022-04-07 21:00:00',
  email: 'ana@asdasd.com',
  senha: 'bb96c2fc40d2d54617d6f276febe571f623a8dadf0b734855299b0e107fda32cf6b69f2da32b36445d73690b93cbd0f7bfc20e0f7f28553d2a4428f23b716e90',
  telefone: '12999957995994'
};

export const cliente_seeder = [
  cliente_1, cliente_2
];

export const cliente_seeder_data = gerador_seeder_insert(Cliente, cliente_seeder);
