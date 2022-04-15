import Usuario from "../entity/Usuario";
import { gerador_seeder_insert } from "./gerador_seeder";

export const usuario_1 = {
  id: 1,
  nome: 'Jeca',
  email: 'jeca@email.com',
  senha: '84d89877f0d4041efb6bf91a16f0248f2fd573e6af05c19f96bedb9f882f7882',
  data_cadastro: '2022-04-06 15:42:15',
  data_modificacao_cadastro: '2022-04-06 15:42:15',
  codigo: '5025f5df-5315-4a8a-abc0-dc3b0b76c1b0'
};

export const usuario_2 = {
  id: 2,
  nome: 'Juca',
  email: 'juca@email.com',
  senha: 'bb96c2fc40d2d54617d6f276febe571f623a8dadf0b734855299b0e107fda32cf6b69f2da32b36445d73690b93cbd0f7bfc20e0f7f28553d2a4428f23b716e90',
  data_cadastro: '2022-04-05 21:00:00',
  data_modificacao_cadastro: '2022-04-05 21:00:00',
  codigo: '0fe7e32a-7be6-43cb-a1cf-89a535e98115'
};

export const usuario_3 = {
  id: 3,
  nome: 'Bola Verde',
  email: 'bolaverde@email.com',
  senha: '84d89877f0d4041efb6bf91a16f0248f2fd573e6af05c19f96bedb9f882f7882',
  data_cadastro: '2022-12-04 00:00:00',
  data_modificacao_cadastro: '2022-12-04 00:00:00',
  codigo: 'aad00ad2-ef89-462b-9594-a71dad75f881'
};

export const usuario_4 = {
  id: 4,
  nome: 'Cubo',
  email: 'cubo@email.com',
  senha: 'bb96c2fc40d2d54617d6f276febe571f623a8dadf0b734855299b0e107fda32cf6b69f2da32b36445d73690b93cbd0f7bfc20e0f7f28553d2a4428f23b716e90',
  data_cadastro: '2022-04-13 19:59:21',
  data_modificacao_cadastro: '2022-04-13 19:59:21',
  codigo: '08606634-8831-432d-91a3-c33921a6e89d'
};

export const usuario_seeder = [
  usuario_1,
  usuario_2,
  usuario_3,
  usuario_4
];

export const usuario_seeder_data = gerador_seeder_insert(Usuario, usuario_seeder);
