import { MigrationInterface, QueryRunner, Table } from "typeorm";

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
      foreignKeys: [
        {
          name: 'refeicao',
          columnNames: ['id_usuario'],
          referencedTableName:'usuario',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('refeicao');
  }
}
