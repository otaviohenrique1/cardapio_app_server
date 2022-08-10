import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { getConnection } from "typeorm";
import { Administrador } from "../entity/Administrador";
import { coluna_codigo, coluna_data_cadastro, coluna_data_modificacao_cadastro, coluna_email, coluna_nome, coluna_primary_key, coluna_senha, if_table_not_exist } from "../utils/constantes_migration";
import { FormatadorCrypto } from "../utils/FormatadorCrypto";
import { AdministradorTypes } from "../utils/interfaces_types";

const NOME_TABELA = 'administrador';

export class createAdministrador1651795165253 implements MigrationInterface {
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
        coluna_data_cadastro,
        coluna_data_modificacao_cadastro,
      ],
    }), if_table_not_exist);

    // await getConnection()
    //   .createQueryBuilder()
    //   .insert()
    //   .into(Administrador)
    //   .values([
    //     administrador_1
    //   ])
    //   .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA);
  }
}

const administrador_1: AdministradorTypes = {
  id: 1,
  nome: 'Reginaldo',
  codigo: 'ccc51e54-0be0-4c43-a104-d6469d65b6e1',
  email: 'reginaldo@email.com',
  senha: FormatadorCrypto.mensagemSHA512('0123456789'),
  data_cadastro: new Date(),
  data_modificacao_cadastro: new Date()
};
