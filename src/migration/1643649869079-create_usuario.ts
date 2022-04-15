import { getConnection, MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";
import Usuario from "../entity/Usuario";
import { usuario_seeder } from "../seeder/usuario_seeder";

export class createUsuario1643649869079 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('usuario', true);
    await queryRunner.createTable(new Table({
      name: 'usuario',
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
      ],
    }), true);

    /* Seeder - Retirar quando for para producao */
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Usuario)
      .values(usuario_seeder)
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('usuario');
  }
}

/* Seeder - Retirar quando for para producao */
// await getConnection()
//   .createQueryBuilder()
//   .insert()
//   .into(Usuario)
//   .values([
//     {
//       id: 1,
//       nome: 'Jeca',
//       email: 'jeca@email.com',
//       senha: '84d89877f0d4041efb6bf91a16f0248f2fd573e6af05c19f96bedb9f882f7882',
//       data_cadastro: '2022-04-06 15:42:15',
//       data_modificacao_cadastro: '2022-04-06 15:42:15',
//       codigo: '5025f5df-5315-4a8a-abc0-dc3b0b76c1b0'
//     },
//     {
//       id: 2,
//       nome: 'Juca',
//       email: 'juca@email.com',
//       senha: 'bb96c2fc40d2d54617d6f276febe571f623a8dadf0b734855299b0e107fda32cf6b69f2da32b36445d73690b93cbd0f7bfc20e0f7f28553d2a4428f23b716e90',
//       data_cadastro: '2022-04-05 21:00:00',
//       data_modificacao_cadastro: '2022-04-05 21:00:00',
//       codigo: '0fe7e32a-7be6-43cb-a1cf-89a535e98115'
//     },
//     {
//       id: 3,
//       nome: 'Bola Verde',
//       email: 'bolaverde@email.com',
//       senha: '84d89877f0d4041efb6bf91a16f0248f2fd573e6af05c19f96bedb9f882f7882',
//       data_cadastro: '2022-12-04 00:00:00',
//       data_modificacao_cadastro: '2022-12-04 00:00:00',
//       codigo: 'aad00ad2-ef89-462b-9594-a71dad75f881'
//     },
//     {
//       id: 4,
//       nome: 'Cubo',
//       email: 'cubo@email.com',
//       senha: 'bb96c2fc40d2d54617d6f276febe571f623a8dadf0b734855299b0e107fda32cf6b69f2da32b36445d73690b93cbd0f7bfc20e0f7f28553d2a4428f23b716e90',
//       data_cadastro: '2022-04-13 19:59:21',
//       data_modificacao_cadastro: '2022-04-13 19:59:21',
//       codigo: '08606634-8831-432d-91a3-c33921a6e89d'
//     }
//   ])
//   .execute();

/* Seeder - Retirar quando for para producao */
// await queryRunner.query("INSERT INTO usuario (id, nome, email, senha, data_cadastro, data_modificacao_cadastro, codigo) VALUES (1,'Jeca','jeca@email.com','84d89877f0d4041efb6bf91a16f0248f2fd573e6af05c19f96bedb9f882f7882','2022-04-06 15:42:15','2022-04-06 15:42:15','5025f5df-5315-4a8a-abc0-dc3b0b76c1b0'),(2,'Juca','juca@email.com','bb96c2fc40d2d54617d6f276febe571f623a8dadf0b734855299b0e107fda32cf6b69f2da32b36445d73690b93cbd0f7bfc20e0f7f28553d2a4428f23b716e90','2022-04-05 21:00:00','2022-04-05 21:00:00','0fe7e32a-7be6-43cb-a1cf-89a535e98115'),(3,'Bola Verde','bolaverde@email.com','84d89877f0d4041efb6bf91a16f0248f2fd573e6af05c19f96bedb9f882f7882','2022-12-04 00:00:00','2022-12-04 00:00:00','aad00ad2-ef89-462b-9594-a71dad75f881'),(4,'Cubo','cubo@email.com','bb96c2fc40d2d54617d6f276febe571f623a8dadf0b734855299b0e107fda32cf6b69f2da32b36445d73690b93cbd0f7bfc20e0f7f28553d2a4428f23b716e90','2022-04-13 19:59:21','2022-04-13 19:59:21','08606634-8831-432d-91a3-c33921a6e89d');");
