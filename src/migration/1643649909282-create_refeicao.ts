import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createRefeicao1643649909282 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'usuario',
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
          type: 'varchar'
        },
        {
          name: 'preco',
          type: 'decimal'
        },
        {
          name: 'ingredientes',
          type: 'varchar',
        },
        {
          name: 'ativo',
          type: 'boolean',
        },
        {
          name: 'data_cadastro',
          type: 'datetime'
        },
        {
          name: 'id_usuario',
          type: 'integer'
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('refeicao');
  }
}
