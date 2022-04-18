import Usuario from "../entity/Usuario";
import { FormatadorCrypto } from "../utils/FormatadorCrypto";
import { GeradorDados } from "./GeradorDados";
import { gerador_seeder_insert } from "./gerador_seeder";

function GeradorSeederUsuario(
  id: number, nome: string, email: string,
  senha: string, data_cadastro: string,
  data_modificacao_cadastro: string, codigo: string
) {
  return {
    id, nome, email, senha, data_cadastro,
    data_modificacao_cadastro, codigo
  };
}

export const usuario_1 = GeradorSeederUsuario(
  1, 'Jeca', 'jeca@email.com',
  FormatadorCrypto.mensagemSHA512('0123456789'),
  '2022-04-06 15:42:15', '2022-04-06 15:42:15',
  GeradorDados.GeraCodigo());

export const usuario_2 = GeradorSeederUsuario(
  2, 'Juca', 'juca@email.com',
  FormatadorCrypto.mensagemSHA512('9876543210'),
  '2022-04-05 21:00:00', '2022-04-05 21:00:00',
  GeradorDados.GeraCodigo());

export const usuario_3 = GeradorSeederUsuario(
  3, 'Bola Verde', 'bolaverde@email.com',
  FormatadorCrypto.mensagemSHA512('9638527410'),
  '2022-12-04 00:00:00', '2022-12-04 00:00:00',
  GeradorDados.GeraCodigo());

export const usuario_4 = GeradorSeederUsuario(
  4, 'Cubo', 'cubo@email.com',
  FormatadorCrypto.mensagemSHA512('0147258369'),
  '2022-04-13 19:59:21', '2022-04-13 19:59:21',
  GeradorDados.GeraCodigo());

export const usuario_seeder = [
  usuario_1, usuario_2, usuario_3, usuario_4
];

export const usuario_seeder_data = gerador_seeder_insert(Usuario, usuario_seeder);
