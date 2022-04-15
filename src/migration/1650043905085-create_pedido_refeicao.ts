import { MigrationInterface, QueryRunner, Table } from "typeorm";

const NOME_TABELA = 'pedido';

export class createPedidoRefeicao1650043905085 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA, true);
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
        {
          name: 'status_pedido',
          type: 'varchar',
          isNullable: false,
          length: '255'
        },
        {
          name: 'preco_total',
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
      ],
    }), true);

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
