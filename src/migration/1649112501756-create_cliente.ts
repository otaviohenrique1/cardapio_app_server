import { getConnection, MigrationInterface, QueryRunner, Table } from "typeorm";
import { Cliente } from "../entity/Cliente";
import { coluna_bairro, coluna_cep, coluna_cidade, coluna_codigo, coluna_data_cadastro, coluna_data_modificacao_cadastro, coluna_email, coluna_estado, coluna_nome, coluna_numero, coluna_primary_key, coluna_rua, coluna_senha, coluna_telefone, if_table_not_exist } from "../utils/constantes_migration";
import { FormatadorCrypto } from "../utils/FormatadorCrypto";

const NOME_TABELA = 'cliente';

export class createCliente1649112501756 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA, if_table_not_exist);
    await queryRunner.createTable(new Table({
      name: NOME_TABELA,
      columns: [
        coluna_primary_key,
        coluna_nome,
        coluna_email,
        coluna_senha,
        coluna_rua,
        coluna_numero,
        coluna_bairro,
        coluna_cidade,
        coluna_estado,
        coluna_cep,
        coluna_telefone,
        coluna_codigo,
        coluna_data_cadastro,
        coluna_data_modificacao_cadastro,
      ]
    }), if_table_not_exist);

    /* Seeder - Retirar quando for para producao */
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Cliente)
      .values([
        cliente_1,
        cliente_2,
        cliente_3,
        cliente_4,
        cliente_5,
        cliente_6
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA);
  }
}

const cliente_1 = {
  id: 1,
  nome: 'Zeca',
  codigo: '7ba22d04-160a-432c-bedc-2f281d33dd6c',
  email: 'Rua do centro',
  senha: '50',
  telefone: 'Centro',
  rua: 'Cachoeira Paulista',
  numero: 'São Paulo',
  bairro: '12630000',
  cidade: 'zeca@email.com',
  estado: FormatadorCrypto.mensagemSHA512('0123456789'),
  cep: '12999999999999',
  data_cadastro: new Date(),
  data_modificacao_cadastro: new Date()
};

const cliente_2 = {
  id: 2,
  nome: 'Ana',
  codigo: 'c4e8f942-ba13-4aa8-9d4a-37cad663c357',
  email: 'Rua do centro',
  senha: '78',
  telefone: 'Centro',
  rua: 'Cachoeira Paulista',
  numero: 'São Paulo',
  bairro: '12630000',
  cidade: 'ana@asdasd.com',
  estado: FormatadorCrypto.mensagemSHA512('9876543210'),
  cep: '12999957995994',
  data_cadastro: new Date(),
  data_modificacao_cadastro: new Date()
};

const cliente_3 = {
  id: 3,
  nome: 'Maria',
  codigo: '5c66d441-9165-4132-9858-801a0fa4e731',
  email: 'Rua do centro',
  senha: '50',
  telefone: 'Centro',
  rua: 'Cachoeira Paulista',
  numero: 'São Paulo',
  bairro: '12630000',
  cidade: 'maria@email.com',
  estado: FormatadorCrypto.mensagemSHA512('0123456789'),
  cep: '12999999999999',
  data_cadastro: new Date(),
  data_modificacao_cadastro: new Date()
};

const cliente_4 = {
  id: 4,
  nome: 'Joana',
  codigo: '4d7b9059-e76b-49b2-ba4e-9d9af999941b',
  email: 'Rua do centro',
  senha: '78',
  telefone: 'Centro',
  rua: 'Cachoeira Paulista',
  numero: 'São Paulo',
  bairro: '12630000',
  cidade: 'joana@asdasd.com',
  estado: FormatadorCrypto.mensagemSHA512('9876543210'),
  cep: '12999957995994',
  data_cadastro: new Date(),
  data_modificacao_cadastro: new Date()
};

const cliente_5 = {
  id: 5,
  nome: 'Mario',
  codigo: 'e0ca10c7-b166-4250-8ba9-e06382cb0d90',
  email: 'Rua do centro',
  senha: '50',
  telefone: 'Centro',
  rua: 'Cachoeira Paulista',
  numero: 'São Paulo',
  bairro: '12630000',
  cidade: 'mario@email.com',
  estado: FormatadorCrypto.mensagemSHA512('0123456789'),
  cep: '12999999999999',
  data_cadastro: new Date(),
  data_modificacao_cadastro: new Date()
};

const cliente_6 = {
  id: 6,
  nome: 'Luiza',
  codigo: 'f47caf07-86d6-463c-8d4b-bf60a8f0311e',
  email: 'Rua do centro',
  senha: '78',
  telefone: 'Centro',
  rua: 'Cachoeira Paulista',
  numero: 'São Paulo',
  bairro: '12630000',
  cidade: 'luiza@asdasd.com',
  estado: FormatadorCrypto.mensagemSHA512('9876543210'),
  cep: '12999957995994',
  data_cadastro: new Date(),
  data_modificacao_cadastro: new Date()
};
