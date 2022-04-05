import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createPedido1648836927503 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'pedido',
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
          name: 'lista_refeicoes',
          type: 'text',
          isNullable: false,
        },
        {
          name: 'preco_pedido',
          type: 'decimal',
          isNullable: false,
          precision: 10,
          scale: 2,
        },
        {
          name: 'codigo',
          type: 'varchar',
          isGenerated: true,
          generationStrategy: 'uuid'
        },
        {
          name: 'data_cadastro',
          type: 'datetime'
        },
        {
          name: 'data_modificacao_cadastro',
          type: 'datetime'
        },
      ]
    }));
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pedido');
  }
}
