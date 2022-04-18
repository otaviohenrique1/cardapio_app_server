import { Empresa } from "../entity/Empresa";
import { FormatadorCrypto } from "../utils/FormatadorCrypto";
import { GeradorDados } from "./GeradorDados";
import { gerador_seeder_insert } from "./gerador_seeder";

function GeradorSeederEmpresa(
  id: number, nome: string, email: string, senha: string,
  codigo: string, status_cadastro: boolean,
  data_cadastro: string, data_modificacao_cadastro: string
) {
  return {
    id, nome, email, senha, codigo, status_cadastro,
    data_cadastro, data_modificacao_cadastro
  };
}

export const empresa_1 = GeradorSeederEmpresa(
  1, 'Bola', 'bola@email.com',
  FormatadorCrypto.mensagemSHA512('0123456789'),
  GeradorDados.GeraCodigo(), true,
  '2022-12-04 10:00:00','2022-12-04 10:00:00'
);

export const empresa_2 = GeradorSeederEmpresa(
  2, 'Cubo', 'cubo@email.com',
  FormatadorCrypto.mensagemSHA512('9876543210'),
  GeradorDados.GeraCodigo(), true,
  '2022-12-04 11:00:00', '2022-12-04 11:00:00'
);

export const empresa_seeder = [
  empresa_1, empresa_2
];

export const cliente_seeder_data = gerador_seeder_insert(Empresa, empresa_seeder);
