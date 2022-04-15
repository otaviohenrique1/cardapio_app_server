import { MigrationInterface, QueryRunner, Table } from "typeorm";

const NOME_TABELA = 'ingrediente';

export class createIngrediente1650043902837 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA, true);
    await queryRunner.createTable(new Table({
      name: NOME_TABELA,
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'nome',
          type: 'varchar',
          isNullable: false,
          length: '255'
        },
        {
          name: 'quantidade',
          type: 'integer',
          isNullable: false,
        },
        {
          name: 'refeicaoId',
          type: 'integer'
        },
      ],
    }), true);

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
