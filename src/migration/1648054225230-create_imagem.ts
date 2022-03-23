import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImagem1648054225230 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'imagem',
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
          name: 'path',
          type: 'varchar'
        },
        {
          name: 'refeicao_id',
          type: 'integer'
        },
      ],
      foreignKeys: [
        {
          name: 'imagem',
          columnNames: ['refeicao_id'],
          referencedTableName: 'refeicao',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      ],
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('imagem');
  }
}
