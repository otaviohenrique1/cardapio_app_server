import { getConnection, MigrationInterface, QueryRunner } from "typeorm";
import Refeicao from "../entity/Refeicao";

// Retirar se for colocar na produção
// Somente como desenvolvimento

export class insertRefeicao1645051995121 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Refeicao)
      .values([
        {
          nome: "X-Burguer",
          preco: 20,
          ingredientes: "Pão, Carne, Queijo",
          ativo: false,
          data_cadastro: "2021-12-10",
          id_usuario: 1
        },
        {
          nome: "Cheese-Burguer",
          preco: 20,
          ingredientes: "Pão, Carne, Queijo Cheddar",
          ativo: true,
          data_cadastro: "2021-12-10",
          id_usuario: 1
        },
        {
          nome: "Jaca-Burguer",
          preco: 20,
          ingredientes: "Pão, Carne, Queijo, Jaca",
          ativo: false,
          data_cadastro: "2021-12-10",
          id_usuario: 1
        },
        {
          nome: "Presunto-Burguer",
          preco: 20,
          ingredientes: "Pão, Carne, Presunto",
          ativo: false,
          data_cadastro: "2021-12-10",
          id_usuario: 1
        },
        {
          nome: "X-Burguer Duplo",
          preco: 20,
          ingredientes: "Pão, 2 Carnes, Queijo",
          ativo: true,
          data_cadastro: "2021-12-10",
          id_usuario: 1
        },
        {
          nome: "X-Burguer Bancon",
          preco: 20,
          ingredientes: "Pão, Carne, Queijo, Bancon",
          ativo: true,
          data_cadastro: "2021-12-10",
          id_usuario: 1
        },
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}