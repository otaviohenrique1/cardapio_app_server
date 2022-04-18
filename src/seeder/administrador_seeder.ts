import { Administrador } from "../entity/Administrador";
import { FormatadorCrypto } from "../utils/FormatadorCrypto";
import { GeradorDados } from "./GeradorDados";
import { gerador_seeder_insert } from "./gerador_seeder";

function GeradorSeederAdministrador(
  id: number, nome: string, email: string,
  senha: string, data_cadastro: string,
  data_modificacao_cadastro: string, codigo: string
) {
  return {
    id, nome, email, senha, data_cadastro,
    data_modificacao_cadastro, codigo
  };
}

const administrador_1 = GeradorSeederAdministrador(
  1, 'Reginaldo', 'reginaldo@email.com',
  FormatadorCrypto.mensagemSHA512('0123456789'),
  GeradorDados.GeraCodigo(),
  '2022-12-04 10:10:00', '2022-12-04 14:15:00'
);

export const administrador_seeder = [
  administrador_1
];

export const administrador_seeder_data = gerador_seeder_insert(Administrador, administrador_seeder);