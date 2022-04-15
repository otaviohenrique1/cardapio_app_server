import { getConnection, MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";
import { Cliente } from "../entity/Cliente";
import { cliente_seeder } from "../seeder/cliente_seeder";

export class createCliente1649112501756 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('cliente', true);
    await queryRunner.createTable(new Table({
      name: 'cliente',
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
          name: 'email',
          type: 'varchar',
          isNullable: false,
          length: '255'
        },
        {
          name: 'senha',
          type: 'varchar',
          isNullable: false,
          length: '255'
        },
        {
          name: 'rua',
          type: 'varchar',
          isNullable: false,
          length: '255'
        },
        {
          name: 'numero',
          type: 'varchar',
          isNullable: false,
          length: '255'
        },
        {
          name: 'bairro',
          type: 'varchar',
          isNullable: false,
          length: '255'
        },
        {
          name: 'cidade',
          type: 'varchar',
          isNullable: false,
          length: '255'
        },
        {
          name: 'estado',
          type: 'varchar',
          isNullable: false,
          length: '255'
        },
        {
          name: 'cep',
          type: 'varchar',
          isNullable: false,
          length: '255'
        },
        {
          name: 'telefone',
          type: 'varchar',
          isNullable: false,
          length: '255'
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
    }), true);

    /* Seeder - Retirar quando for para producao */
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Cliente)
      .values(cliente_seeder)
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('cliente');
  }
}

/* Seeder - Retirar quando for para producao */
// await getConnection()
// .createQueryBuilder()
// .insert()
// .into(Cliente)
// .values([
//   {
//     id: 1,
//     nome: 'Zeca',
//     rua: 'Rua do centro',
//     numero: '50',
//     bairro: 'Centro',
//     cidade: 'Cachoeira Paulista',
//     estado: 'São Paulo',
//     cep: '12630000',
//     codigo: 'dcbde0ba-645d-4c07-b9a2-1d5ed38d1e29',
//     data_cadastro: '2022-04-06 15:42:15',
//     data_modificacao_cadastro: '2022-04-06 15:42:15',
//     email: 'zeca@email.com',
//     senha: 'bb96c2fc40d2d54617d6f276febe571f623a8dadf0b734855299b0e107fda32cf6b69f2da32b36445d73690b93cbd0f7bfc20e0f7f28553d2a4428f23b716e90',
//     telefone: '12999999999999'
//   },
//   {
//     id: 2,
//     nome: 'dasdasd',
//     rua: 'asdasd',
//     numero: '78',
//     bairro: 'asdasdasdasd',
//     cidade: 'asdasdasd',
//     estado: 'asdasdasd',
//     cep: '12306000',
//     codigo: 'aff42dbd-c425-4d98-916c-6edbfa4bf152',
//     data_cadastro: '2022-04-07 21:00:00',
//     data_modificacao_cadastro: '2022-04-07 21:00:00',
//     email: 'asdasd@asdasd.com',
//     senha: 'bb96c2fc40d2d54617d6f276febe571f623a8dadf0b734855299b0e107fda32cf6b69f2da32b36445d73690b93cbd0f7bfc20e0f7f28553d2a4428f23b716e90',
//     telefone: '88888888'
//   }
// ])
// .execute();

/* Seeder - Retirar quando for para producao */
// await queryRunner.query("INSERT INTO cliente (id, nome, rua, numero, bairro, cidade, estado, cep, codigo, data_cadastro, data_modificacao_cadastro, email, senha, telefone) VALUES (1,'Zeca','Rua do centro','50','Centro','Cachoeira Paulista','São Paulo','12630000','dcbde0ba-645d-4c07-b9a2-1d5ed38d1e29','2022-04-06 15:42:15','2022-04-06 15:42:15','zeca@email.com','bb96c2fc40d2d54617d6f276febe571f623a8dadf0b734855299b0e107fda32cf6b69f2da32b36445d73690b93cbd0f7bfc20e0f7f28553d2a4428f23b716e90','12999999999999'),(2,'dasdasd','asdasd','78','asdasdasdasd','asdasdasd','asdasdasd','12306000','aff42dbd-c425-4d98-916c-6edbfa4bf152','2022-04-07 21:00:00','2022-04-07 21:00:00','asdasd@asdasd.com','bb96c2fc40d2d54617d6f276febe571f623a8dadf0b734855299b0e107fda32cf6b69f2da32b36445d73690b93cbd0f7bfc20e0f7f28553d2a4428f23b716e90','88888888');");
