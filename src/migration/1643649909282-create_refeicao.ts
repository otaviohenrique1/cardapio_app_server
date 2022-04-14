import { getConnection, MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";
import Refeicao from "../entity/Refeicao";

export class createRefeicao1643649909282 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'refeicao',
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
          name: 'nome',
          type: 'varchar',
          isNullable: false,
          length: '255'
        },
        {
          name: 'preco',
          type: 'decimal',
          isNullable: false,
          precision: 10,
          scale: 2,
        },
        {
          name: 'ingredientes',
          type: 'text',
          isNullable: false,
        },
        {
          name: 'ativo',
          type: 'boolean',
          isNullable: false,
        },
        {
          name: 'codigo',
          type: 'varchar',
          isNullable: false,
          length: '255'
        },
        {
          name: 'data_cadastro',
          type: 'datetime',
        },
        {
          name: 'data_modificacao_cadastro',
          type: 'datetime',
        },
        {
          name: 'id_usuario',
          type: 'integer',
        },
      ],
    }));
    await queryRunner.dropColumn('refeicao', 'codigo');
    await queryRunner.addColumn('refeicao', new TableColumn({
      name: 'codigo',
      type: 'varchar',
      isGenerated: true,
      generationStrategy: 'uuid'
    }));
    await queryRunner.addColumn('refeicao', new TableColumn({
      name: 'descricao',
      type: 'text',
      isNullable: false,
    }));
    await queryRunner.dropColumn('refeicao', 'id_usuario');
    await queryRunner.addColumn('refeicao', new TableColumn({
      name: 'usuarioId',
      type: 'integer',
    }));

    /* Seeder - Retirar quando for para producao */
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Refeicao)
      .values([
        {
          id: 1,
          nome: 'X-Burguer 1',
          ativo: true, /* 1 */
          data_cadastro: '2022-04-06 17:10:36',
          data_modificacao_cadastro: '2022-04-06 17:10:36',
          codigo: 'e1fd2a6e-6fee-48bf-8eb5-6dc12a49d104',
          preco: 15,
          ingredientes: '\"[{\\\"nome\\\":\\\"Pão\\\"},{\\\"nome\\\":\\\"Carne\\\"},{\\\"nome\\\":\\\"Queijo\\\"}]\"',
          descricao: 'Hamburguer basico 1',
          usuario: { id: 1 },
        },
        {
          id: 2,
          nome: 'X-Burguer 2',
          ativo: true, /* 1 */
          data_cadastro: '2022-04-06 17:46:41',
          data_modificacao_cadastro: '2022-04-06 17:46:41',
          codigo: '5859a511-e18a-4ad0-9d17-0d1a92383bb1',
          preco: 12,
          ingredientes: '\"[{\\\"nome\\\":\\\"Pão\\\"},{\\\"nome\\\":\\\"Carne\\\"},{\\\"nome\\\":\\\"Queijo\\\"}]\"',
          descricao: 'Hamburguer basico 2',
          usuario: { id: 1 },
        },
        {
          id: 3,
          nome: 'X-Burguer 3',
          ativo: true, /* 1 */
          data_cadastro: '2022-04-06 18:55:39',
          data_modificacao_cadastro: '2022-04-06 18:55:39',
          codigo: '300971e4-de41-4a64-8489-fbe07dbe3442',
          preco: 10,
          ingredientes: '\"[{\\\"nome\\\":\\\"Pão\\\"},{\\\"nome\\\":\\\"Carne\\\"},{\\\"nome\\\":\\\"Queijo\\\"}]\"',
          descricao: 'Hamburguer basico 3',
          usuario: { id: 1 },
        },
        {
          id: 4,
          nome: 'X-Burguer 4',
          ativo: true, /* 1 */
          data_cadastro: '2022-04-06 19:47:54',
          data_modificacao_cadastro: '2022-04-06 19:47:54',
          codigo: '16cdf4fa-d757-4c71-b5ee-95422d56cfb4',
          preco: 20,
          ingredientes: '\"[{\\\"nome\\\":\\\"Pão\\\"},{\\\"nome\\\":\\\"Carne\\\"},{\\\"nome\\\":\\\"Queijo\\\"}]\"',
          descricao: 'Hamburguer basico 4',
          usuario: { id: 1 },
        },
        {
          id: 5,
          nome: 'X-Burguer 5',
          ativo: true, /* 1 */
          data_cadastro: '2022-04-06 19:52:42',
          data_modificacao_cadastro: '2022-04-06 19:52:42',
          codigo: 'cf238e14-793a-4173-8d64-249d2fa25f09',
          preco: 25,
          ingredientes: '\"[{\\\"nome\\\":\\\"Pão\\\"},{\\\"nome\\\":\\\"Carne\\\"},{\\\"nome\\\":\\\"Queijo\\\"}]\"',
          descricao: 'Hamburguer basico 5',
          usuario: { id: 1 },
        },
        {
          id: 6,
          nome: 'X-Burguer 6',
          ativo: true, /* 1 */
          data_cadastro: '2022-04-06 19:57:05',
          data_modificacao_cadastro: '2022-04-06 19:57:05',
          codigo: 'b16bfcb2-031d-4e6e-b859-7c619cac881c',
          preco: 28,
          ingredientes: '\"[{\\\"nome\\\":\\\"Pão\\\"},{\\\"nome\\\":\\\"Carne\\\"},{\\\"nome\\\":\\\"Queijo\\\"}]\"',
          descricao: 'Hamburguer basico 6',
          usuario: { id: 1 },
        },
        {
          id: 7,
          nome: 'X-Cubo 1',
          ativo: true, /* 1 */
          data_cadastro: '2022-04-13 20:14:02',
          data_modificacao_cadastro: '2022-04-13 20:14:02',
          codigo: '1a2d6d98-7812-4f3e-8749-18e5cab5af14',
          preco: 20,
          ingredientes: '\"[{\"nome\":\"Pão\"},{\"nome\":\"Cubo\"}]\"',
          descricao: 'Lanche bom',
          usuario: { id: 4 },
        }
      ])
      .execute();

    /* Seeder - Retirar quando for para producao */
    // await queryRunner.query("INSERT INTO refeicao (id, nome, ativo, data_cadastro, data_modificacao_cadastro, codigo, usuarioId, preco, ingredientes, descricao) VALUES (1,'X-Burguer 1',1,'2022-04-06 17:10:36','2022-04-06 17:10:36','e1fd2a6e-6fee-48bf-8eb5-6dc12a49d104',1,15,'\"[{\\\"nome\\\":\\\"Pão\\\"},{\\\"nome\\\":\\\"Carne\\\"},{\\\"nome\\\":\\\"Queijo\\\"}]\"','Hamburguer basico 1'),(2,'X-Burguer 2',1,'2022-04-06 17:46:41','2022-04-06 17:46:41','5859a511-e18a-4ad0-9d17-0d1a92383bb1',1,12,'\"[{\\\"nome\\\":\\\"Pão\\\"},{\\\"nome\\\":\\\"Carne\\\"},{\\\"nome\\\":\\\"Queijo\\\"}]\"','Hamburguer basico 2'),(3,'X-Burguer 3',1,'2022-04-06 18:55:39','2022-04-06 18:55:39','300971e4-de41-4a64-8489-fbe07dbe3442',1,10,'\"[{\\\"nome\\\":\\\"Pão\\\"},{\\\"nome\\\":\\\"Carne\\\"},{\\\"nome\\\":\\\"Queijo\\\"}]\"','Hamburguer basico 3'),(4,'X-Burguer 4',1,'2022-04-06 19:47:54','2022-04-06 19:47:54','16cdf4fa-d757-4c71-b5ee-95422d56cfb4',1,20,'\"[{\\\"nome\\\":\\\"Pão\\\"},{\\\"nome\\\":\\\"Carne\\\"},{\\\"nome\\\":\\\"Queijo\\\"}]\"','Hamburguer basico 4'),(5,'X-Burguer 5',1,'2022-04-06 19:52:42','2022-04-06 19:52:42','cf238e14-793a-4173-8d64-249d2fa25f09',1,25,'\"[{\\\"nome\\\":\\\"Pão\\\"},{\\\"nome\\\":\\\"Carne\\\"},{\\\"nome\\\":\\\"Queijo\\\"}]\"','Hamburguer basico 5'),(6,'X-Burguer 6',1,'2022-04-06 19:57:05','2022-04-06 19:57:05','b16bfcb2-031d-4e6e-b859-7c619cac881c',1,28,'\"[{\\\"nome\\\":\\\"Pão\\\"},{\\\"nome\\\":\\\"Carne\\\"},{\\\"nome\\\":\\\"Queijo\\\"}]\"','Hamburguer basico 6'),(7,'X-Cubo 1',1,'2022-04-13 20:14:02','2022-04-13 20:14:02','1a2d6d98-7812-4f3e-8749-18e5cab5af14',4,20,'[{\"nome\":\"Pão\"},{\"nome\":\"Cubo\"}]','Lanche bom');");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('refeicao');
  }
}
