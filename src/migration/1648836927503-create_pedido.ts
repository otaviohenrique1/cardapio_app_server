import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

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
          name: 'cliente_nome',
          type: 'varchar',
          isNullable: false,
          length: '255'
        },
        {
          name: 'cliente_endereço',
          type: 'varchar',
          isNullable: false,
          length: '255'
        },
        {
          name: 'cliente_telefone',
          type: 'varchar',
          isNullable: false,
          length: '255'
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
          isNullable: false,
          length: '255'
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
    await queryRunner.dropColumn('pedido', 'cliente_nome');
    await queryRunner.dropColumn('pedido', 'cliente_endereço');
    await queryRunner.dropColumn('pedido', 'cliente_telefone');
    await queryRunner.dropColumn('pedido', 'codigo');
    await queryRunner.addColumn('pedido', new TableColumn({
      name: 'codigo',
      type: 'varchar',
      isGenerated: true,
      generationStrategy: 'uuid'
    }));
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pedido');
  }
}
