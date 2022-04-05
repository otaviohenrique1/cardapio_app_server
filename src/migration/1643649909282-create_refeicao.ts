import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class createRefeicao1643649909282 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'refeicao',
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
          name: 'preco',
          type: 'decimal',
          isNullable: false,
          precision: 10,
          scale: 2,
        },
        {
          name: 'ingredientes',
          type: 'text',
          isNullable: false,
        },
        {
          name: 'descricao',
          type: 'text',
          isNullable: false,
        },
        {
          name: 'ativo',
          type: 'boolean',
          isNullable: false,
        },
        {
          name: 'codigo',
          type: 'varchar',
          isNullable: false,
          length: '255'
        },
        {
          name: 'data_cadastro',
          type: 'datetime',
        },
        {
          name: 'data_modificacao_cadastro',
          type: 'datetime',
        },
        {
          name: 'id_usuario',
          type: 'integer',
        },
      ],
    }));
    await queryRunner.dropColumn('refeicao', 'codigo');
    await queryRunner.addColumn('refeicao', new TableColumn({
      name: 'codigo',
      type: 'varchar',
      isGenerated: true,
      generationStrategy: 'uuid'
    }));
    await queryRunner.addColumn('refeicao', new TableColumn({
      name: 'descricao',
      type: 'text',
      isNullable: false,
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('refeicao');
  }
}
