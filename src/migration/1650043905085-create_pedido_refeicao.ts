import { getConnection, MigrationInterface, QueryRunner, Table } from "typeorm";
import { PedidoRefeicao } from "../entity/PedidoRefeicao";
import { coluna_pedidoId, coluna_primary_key, coluna_quantidade, coluna_refeicaoId, if_table_not_exist } from "../utils/constantes_migration";

const NOME_TABELA = 'pedido_refeicao';

export class createPedidoRefeicao1650043905085 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA, if_table_not_exist);
    await queryRunner.createTable(new Table({
      name: NOME_TABELA,
      columns: [
        coluna_primary_key,
        coluna_refeicaoId,
        coluna_quantidade,
        coluna_pedidoId,
      ],
    }), if_table_not_exist);

    /* Seeder - Retirar quando for para producao */
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(PedidoRefeicao)
      .values([
        pedido_refeicao_1, pedido_refeicao_2
      ])
      .execute();
  }
  
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA);
  }
}

const pedido_refeicao_1 = {
  id: 1,
  refeicaoId: 1,
  quantidade: 1,
  pedidoId: 1
};

const pedido_refeicao_2 = {
  id: 2,
  refeicaoId: 1,
  quantidade: 1,
  pedidoId: 1
};
