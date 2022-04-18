import { Cliente } from "../entity/Cliente";
import { FormatadorCrypto } from "../utils/FormatadorCrypto";
import { GeradorDados } from "./GeradorDados";
import { gerador_seeder_insert } from "./gerador_seeder";

function GeradorSeederCliente(
  id: number, nome: string, rua: string, numero: string,
  bairro: string, cidade: string, estado: string, cep: string, codigo: string,
  data_cadastro: string, data_modificacao_cadastro: string, email: string,
  senha: string, telefone: string
) {
  return {
    id, nome, rua, numero,
    bairro, cidade, estado, cep, codigo,
    data_cadastro, data_modificacao_cadastro, email,
    senha, telefone
  };
}

export const cliente_1 = GeradorSeederCliente(
  1, 'Zeca', 'Rua do centro', '50', 'Centro', 'Cachoeira Paulista',
  'São Paulo', '12630000', GeradorDados.GeraCodigo(),
  '2022-04-06 15:42:15', '2022-04-06 15:42:15', 'zeca@email.com',
  FormatadorCrypto.mensagemSHA512('0123456789'), '12999999999999'
);

export const cliente_2 = GeradorSeederCliente(
  2, 'Ana', 'Rua do centro', '78', 'Centro', 'Cachoeira Paulista',
  'São Paulo', '12630000', GeradorDados.GeraCodigo(),
  '2022-04-07 21:00:00', '2022-04-07 21:00:00', 'ana@asdasd.com',
  FormatadorCrypto.mensagemSHA512('9876543210'), '12999957995994'
);

export const cliente_seeder = [
  cliente_1, cliente_2
];

export const cliente_seeder_data = gerador_seeder_insert(Cliente, cliente_seeder);
