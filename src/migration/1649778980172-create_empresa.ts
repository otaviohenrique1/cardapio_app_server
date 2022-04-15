import { getConnection, MigrationInterface, QueryRunner, Table } from "typeorm";
import { Empresa } from "../entity/Empresa";
import { empresa_seeder } from "../seeder/empresa_seeder";
import { coluna_nome, coluna_email, coluna_senha, coluna_status_cadastro, coluna_data_cadastro, coluna_data_modificacao_cadastro, if_table_not_exist, coluna_primary_key, coluna_codigo } from "../utils/constantes_migration";

const NOME_TABELA = 'empresa';

export class createEmpresa1649778980172 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA, if_table_not_exist);
    await queryRunner.createTable(new Table({
      name: NOME_TABELA,
      columns: [
        coluna_primary_key,
        coluna_nome,
        coluna_email,
        coluna_senha,
        coluna_status_cadastro,
        coluna_codigo,
        coluna_data_cadastro,
        coluna_data_modificacao_cadastro,
      ],
    }), if_table_not_exist);

    /* Seeder - Retirar quando for para producao */
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Empresa)
      .values(empresa_seeder)
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA);
  }
}



/* Seeder - Retirar quando for para producao */
// await queryRunner.query("");