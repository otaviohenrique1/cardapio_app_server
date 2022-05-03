import { MigrationInterface, QueryRunner, Table } from "typeorm";
// import { getConnection } from "typeorm";
// import { Pedido } from "../entity/Pedido";
import { coluna_clienteId, coluna_codigo, coluna_data_cadastro, coluna_data_modificacao_cadastro, coluna_preco_total, coluna_primary_key, coluna_status_pedido, if_table_not_exist } from "../utils/constantes_migration";

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
        coluna_status_pedido,
        coluna_data_cadastro,
        coluna_data_modificacao_cadastro,
        coluna_clienteId,
      ]
    }), if_table_not_exist);

    /* Seeder - Retirar quando for para producao */
    // await getConnection()
    //   .createQueryBuilder()
    //   .insert()
    //   .into(Pedido)
    //   .values([
    //     pedido_1
    //   ])
    //   .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA);
  }
}

// const pedido_1 = {
//   id: 1,
//   clienteId: 1 ,
//   codigo: '08064641-c4fb-45e5-9246-aeff088e8b74',
//   status_pedido: "Entregue",
//   preco_total: 57,
//   data_cadastro: new Date(),
//   data_modificacao_cadastro: new Date()
// };
