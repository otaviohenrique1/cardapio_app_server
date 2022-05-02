import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { if_table_not_exist, coluna_primary_key, coluna_nome, coluna_preco, coluna_pedidoRefeicaoId } from "../utils/constantes_migration";

const NOME_TABELA = 'pedido_opcional_adicionado';
export class createPedidoOpcionalAdicionado1651496192384 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable(NOME_TABELA, if_table_not_exist);
    await queryRunner.createTable(new Table({
      name: NOME_TABELA,
      columns: [
        coluna_primary_key,
        coluna_nome,
        coluna_preco,
        coluna_pedidoRefeicaoId,
      ],
    }), if_table_not_exist);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA);
  }
}
