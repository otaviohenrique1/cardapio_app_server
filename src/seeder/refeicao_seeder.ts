import Refeicao from "../entity/Refeicao";
import { GeradorDados } from "./GeradorDados";
import { gerador_seeder_insert } from "./gerador_seeder";

function GeradorSeederRefeicao(
  id: number,
  nome: string,
  ativo: boolean,
  data_cadastro: string,
  data_modificacao_cadastro: string,
  codigo: string,
  preco: number,
  descricao: string,
  usuarioId: { id: number }
) {
  return {
    id, nome, ativo, data_cadastro, data_modificacao_cadastro,
    codigo, preco, descricao, usuarioId
  };
}

export const refeicao_1 = GeradorSeederRefeicao(
  1, 'X-Burguer 1', true,
  '2022-04-06 17:10:36', '2022-04-06 17:10:36',
  GeradorDados.GeraCodigo(), 15,
  'Hamburguer basico 1', { id: 1 },
);

export const refeicao_2 = GeradorSeederRefeicao(
  2, 'X-Burguer 2', true,
  '2022-04-06 17:46:41', '2022-04-06 17:46:41',
  GeradorDados.GeraCodigo(),
  12, 'Hamburguer basico 2', { id: 1 }
);

export const refeicao_3 = GeradorSeederRefeicao(
  3, 'X-Burguer 3', true,
  '2022-04-06 18:55:39', '2022-04-06 18:55:39',
  GeradorDados.GeraCodigo(),
  10, 'Hamburguer basico 3', { id: 1 }
);

export const refeicao_4 = GeradorSeederRefeicao(
  4, 'X-Burguer 4', true,
  '2022-04-06 19:47:54', '2022-04-06 19:47:54',
  GeradorDados.GeraCodigo(), 20,
  'Hamburguer basico 4', { id: 1 }
);

export const refeicao_5 = GeradorSeederRefeicao(
  5, 'X-Burguer 5', true,
  '2022-04-06 19:52:42', '2022-04-06 19:52:42',
  GeradorDados.GeraCodigo(), 25,
  'Hamburguer basico 5', { id: 1 }
);

export const refeicao_6 = GeradorSeederRefeicao(
  6, 'X-Burguer 6', true,
  '2022-04-06 19:57:05', '2022-04-06 19:57:05',
  GeradorDados.GeraCodigo(), 28,
  'Hamburguer basico 6', { id: 1 }
);

export const refeicao_7 = GeradorSeederRefeicao(
  7, 'X-Cubo 1', true,
  '2022-04-13 20:14:02', '2022-04-13 20:14:02',
  GeradorDados.GeraCodigo(), 20,
  'Lanche bom', { id: 4 }
);

export const refeicao_8 = GeradorSeederRefeicao(
  8, 'X-Cubo 2', true,
  '2022-04-13 19:38:02', '2022-04-13 19:38:02',
  GeradorDados.GeraCodigo(), 20,
  'Lanche bom', { id: 4 }
);

export const refeicao_9 = GeradorSeederRefeicao(
  9, 'X-Cubo 3', true,
  '2022-04-13 20:38:02', '2022-04-13 20:38:02',
  GeradorDados.GeraCodigo(), 20,
  'Lanche bom', { id: 4 }
);

export const refeicao_seeder = [
  refeicao_1, refeicao_2, refeicao_3, refeicao_4, refeicao_5,
  refeicao_6, refeicao_7, refeicao_8, refeicao_9
];

export const refeicao_seeder_data = gerador_seeder_insert(Refeicao, refeicao_seeder);
