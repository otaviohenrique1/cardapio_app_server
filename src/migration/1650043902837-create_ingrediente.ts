import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { coluna_nome, coluna_primary_key, coluna_quantidade, coluna_refeicaoId, if_table_not_exist } from "../utils/constantes_migration";

const NOME_TABELA = 'ingrediente';

export class createIngrediente1650043902837 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA, if_table_not_exist);
    await queryRunner.createTable(new Table({
      name: NOME_TABELA,
      columns: [
        coluna_primary_key,
        coluna_nome,
        coluna_quantidade,
        coluna_refeicaoId,
      ],
    }), if_table_not_exist);

    /* Seeder - Retirar quando for para producao */
    // await getConnection()
    //   .createQueryBuilder()
    //   .insert()
    //   .into(Usuario)
    //   .values(usuario_seeder)
    //   .execute();
  }
  
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA);
  }
}
