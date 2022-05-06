import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { getConnection } from "typeorm";
import Empresa from "../entity/Empresa";
import { coluna_administradorId, coluna_codigo, coluna_data_cadastro, coluna_data_modificacao_cadastro, coluna_email, coluna_nome, coluna_primary_key, coluna_senha, coluna_status_cadastro, if_table_not_exist } from "../utils/constantes_migration";
import { FormatadorCrypto } from "../utils/FormatadorCrypto";
import { EmpresaTypes } from "../utils/interfaces_types";

const NOME_TABELA = 'empresa';

export class createEmpresa1651795171248 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA, if_table_not_exist);
    await queryRunner.createTable(new Table({
      name: NOME_TABELA,
      columns: [
        coluna_primary_key,
        coluna_nome,
        coluna_email,
        coluna_senha,
        coluna_codigo,
        coluna_status_cadastro,
        coluna_data_cadastro,
        coluna_data_modificacao_cadastro,
        coluna_administradorId,
      ],
    }), if_table_not_exist);

    /* Seeder - Retirar quando for para producao */
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Empresa)
      .values([
        empresa_1,
        empresa_2,
        empresa_3,
        empresa_4
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA);
  }
}

const empresa_1: EmpresaTypes = {
  id: 1,
  nome: 'Jeca',
  codigo: '58a3e5ab-bd42-4912-917e-6e0a6a449cc4',
  email: 'jeca@email.com',
  senha: FormatadorCrypto.mensagemSHA512('0123456789'),
  data_cadastro: new Date(),
  data_modificacao_cadastro: new Date(),
  status_cadastro: true,
  administradorId: 1,
};

const empresa_2: EmpresaTypes = {
  id: 2,
  nome: 'Juca',
  codigo: '9cba876a-e74d-4c85-824a-6acf17e4f633',
  email: 'juca@email.com',
  senha: FormatadorCrypto.mensagemSHA512('9876543210'),
  data_cadastro: new Date(),
  data_modificacao_cadastro: new Date(),
  status_cadastro: true,
  administradorId: 1,
};

const empresa_3: EmpresaTypes = {
  id: 3,
  nome: 'Bola Verde',
  codigo: '5d39de3b-a626-42f3-897a-ec528a0a0b7a',
  email: 'bolaverde@email.com',
  senha: FormatadorCrypto.mensagemSHA512('9638527410'),
  data_cadastro: new Date(),
  data_modificacao_cadastro: new Date(),
  status_cadastro: true,
  administradorId: 1,
};

const empresa_4: EmpresaTypes = {
  id: 4,
  nome: 'Cubo',
  codigo: 'fa5a22b7-d920-49a6-a351-cc38d01a781b',
  email: 'cubo@email.com',
  senha: FormatadorCrypto.mensagemSHA512('0147258369'),
  data_cadastro: new Date(),
  data_modificacao_cadastro: new Date(),
  status_cadastro: true,
  administradorId: 1,
};
