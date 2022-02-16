import { getConnection, MigrationInterface, QueryRunner } from "typeorm";
import Usuario from "../entity/Usuario";

// Retirar se for colocar na produção
// Somente como desenvolvimento

export class insertUsuario1645051975073 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Usuario)
      .values([
        {
          nome: "Jeca",
          email: "jeca@email.com",
          senha: "1234567890",
          data_cadastro: "2021-12-10"
        },
        {
          nome: "Juca",
          email: "juca@email.com",
          senha: "9876543210",
          data_cadastro: "2021-12-10"
        }
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}
