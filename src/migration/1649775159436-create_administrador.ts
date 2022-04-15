import { getConnection, MigrationInterface, QueryRunner, Table } from "typeorm";
import { Administrador } from "../entity/Administrador";
import { administrador_seeder } from "../seeder/administrador_seeder";

export class createAdministrador1649775159436 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('administrador', true);
    await queryRunner.createTable(new Table({
      name: 'administrador',
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
      .into(Administrador)
      .values(administrador_seeder)
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('administrador');
  }
}

/* Seeder - Retirar quando for para producao */
// await getConnection()
//   .createQueryBuilder()
//   .insert()
//   .into(Administrador)
//   .values([
//     {
//       id: 1,
//       nome: 'Reginaldo',
//       email: 'reginaldo@email.com',
//       senha: 'ecfae1db70aa30c43ecc66e53de541e6d91d2bec69b649d5ddf4b6a7f2c485f3cc29c1dfcc710f6a2119c1e38b27f1f55594fea80bb8925881fd20324c0e5d52',
//       codigo: 'd55ce80a-c5c8-4ab1-8b70-195e62dfcc2c',
//       data_cadastro: '2022-12-04 00:00:00',
//       data_modificacao_cadastro: '2022-12-04 00:00:00'
//     }
//   ])
//   .execute();

/* Seeder - Retirar quando for para producao */
// await queryRunner.query("INSERT INTO administrador (id, nome, email, senha, codigo, data_cadastro, data_modificacao_cadastro) VALUES (1,'Reginaldo','reginaldo@email.com','ecfae1db70aa30c43ecc66e53de541e6d91d2bec69b649d5ddf4b6a7f2c485f3cc29c1dfcc710f6a2119c1e38b27f1f55594fea80bb8925881fd20324c0e5d52','d55ce80a-c5c8-4ab1-8b70-195e62dfcc2c','2022-12-04 00:00:00','2022-12-04 00:00:00');");
