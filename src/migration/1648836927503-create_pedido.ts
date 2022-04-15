import { getConnection, MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";
import { Pedido } from "../entity/Pedido";
import { pedido_seeder } from "../seeder/pedido_seeder";

export class createPedido1648836927503 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pedido', true);
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
        {
          name: 'clienteId',
          type: 'integer'
        },
      ]
    }), true);

    /* Seeder - Retirar quando for para producao */
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Pedido)
      .values(pedido_seeder)
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pedido');
  }
}

/* Seeder - Retirar quando for para producao */
// await queryRunner.query("");