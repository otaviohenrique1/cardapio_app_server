import { getConnection, MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";
import { Pedido } from "../entity/Pedido";
import { pedido_seeder } from "../seeder/pedido_seeder";
import { coluna_clienteId, coluna_codigo, coluna_data_cadastro, coluna_data_modificacao_cadastro, coluna_preco_total, coluna_primary_key, if_table_not_exist } from "../utils/constantes_migration";

const NOME_TABELA = 'pedido';
export class createPedido1648836927503 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA, if_table_not_exist);
    await queryRunner.createTable(new Table({
      name: NOME_TABELA,
      columns: [
        coluna_primary_key,
        coluna_preco_total,
        coluna_codigo,
        coluna_data_cadastro,
        coluna_data_modificacao_cadastro,
        coluna_clienteId,
      ]
    }), if_table_not_exist);

    /* Seeder - Retirar quando for para producao */
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Pedido)
      .values(pedido_seeder)
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA);
  }
}

/* Seeder - Retirar quando for para producao */
// await queryRunner.query("");