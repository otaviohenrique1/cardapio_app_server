import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { coluna_data_cadastro, coluna_data_modificacao_cadastro, coluna_preco_total, coluna_status_pedido, if_table_not_exist } from "../utils/constantes_migration";

const NOME_TABELA = 'pedido';

export class createPedidoRefeicao1650043905085 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA, if_table_not_exist);
    await queryRunner.createTable(new Table({
      name: NOME_TABELA,
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        coluna_status_pedido,
        coluna_preco_total,
        {
          name: 'codigo',
          type: 'varchar',
          isGenerated: true,
          generationStrategy: 'uuid'
        },
        coluna_data_cadastro,
        coluna_data_modificacao_cadastro,
        {
          name: 'clienteId',
          type: 'integer'
        },
      ],
    }), if_table_not_exist);

    /* Seeder - Retirar quando for para producao */
    // await getConnection()
    //   .createQueryBuilder()
    //   .insert()
    //   .into(Usuario)
    //   .values(usuario_seeder)
    //   .execute();
  }
  
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA);
  }
}
