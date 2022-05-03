import { MigrationInterface, QueryRunner, Table } from "typeorm";
// import { getConnection } from "typeorm";
// import { Ingrediente } from "../entity/Ingrediente";
import { coluna_ingrediente_removivel, coluna_nome, coluna_primary_key, coluna_quantidade, coluna_refeicaoId, coluna_unidade_quantidade, if_table_not_exist } from "../utils/constantes_migration";

const NOME_TABELA = 'ingrediente';

export class createIngrediente1650043902837 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA, if_table_not_exist);
    await queryRunner.createTable(new Table({
      name: NOME_TABELA,
      columns: [
        coluna_primary_key,
        coluna_nome,
        coluna_quantidade,
        coluna_unidade_quantidade,
        coluna_ingrediente_removivel,
        coluna_refeicaoId,
      ],
    }), if_table_not_exist);

    /* Seeder - Retirar quando for para producao */
    // await getConnection()
    //   .createQueryBuilder()
    //   .insert()
    //   .into(Ingrediente)
    //   .values([
    //     ingrediente_1, ingrediente_2, ingrediente_3,
    //     ingrediente_4, ingrediente_5, ingrediente_6,
    //     ingrediente_7, ingrediente_8, ingrediente_9,
    //     ingrediente_10, ingrediente_11, ingrediente_12,
    //     ingrediente_13, ingrediente_14, ingrediente_15,
    //     ingrediente_16, ingrediente_17, ingrediente_18,
    //     ingrediente_19, ingrediente_20, ingrediente_21,
    //     ingrediente_22, ingrediente_23, ingrediente_24,
    //     ingrediente_25, ingrediente_26, ingrediente_27,
    //   ])
    //   .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA);
  }
}

// const pao = "Pão"
// const queijo = "Queijo"
// const carne = "Carne"

// const ingrediente_1 ={
//   id: 1,
//   nome: pao,
//   quantidade: 1,
//   refeicaoId: 1
// };
// const ingrediente_2 ={
//   id: 2,
//   nome: queijo,
//   quantidade: 2,
//   refeicaoId: 1
// };
// const ingrediente_3 ={
//   id: 3,
//   nome: carne,
//   quantidade: 2,
//   refeicaoId: 1
// };

// const ingrediente_4 ={
//   id: 4,
//   nome: pao,
//   quantidade: 1,
//   refeicaoId: 2
// };
// const ingrediente_5 ={
//   id: 5,
//   nome: queijo,
//   quantidade: 1,
//   refeicaoId: 2
// };
// const ingrediente_6 ={
//   id: 6,
//   nome: carne,
//   quantidade: 1,
//   refeicaoId: 2
// };

// const ingrediente_7 ={
//   id: 7,
//   nome: pao,
//   quantidade: 1,
//   refeicaoId: 3
// };
// const ingrediente_8 ={
//   id: 8,
//   nome: queijo,
//   quantidade: 1,
//   refeicaoId: 3
// };
// const ingrediente_9 ={
//   id: 9,
//   nome: carne,
//   quantidade: 1,
//   refeicaoId: 3
// };

// const ingrediente_10 ={
//   id: 10,
//   nome: pao,
//   quantidade: 1,
//   refeicaoId: 4
// };
// const ingrediente_11 ={
//   id: 11,
//   nome: queijo,
//   quantidade: 1,
//   refeicaoId: 4
// };
// const ingrediente_12 ={
//   id: 12,
//   nome: carne,
//   quantidade: 1,
//   refeicaoId: 4
// };

// const ingrediente_13 ={
//   id: 13,
//   nome: pao,
//   quantidade: 1,
//   refeicaoId: 5
// };
// const ingrediente_14 ={
//   id: 14,
//   nome: queijo,
//   quantidade: 2,
//   refeicaoId: 5
// };
// const ingrediente_15 ={
//   id: 15,
//   nome: carne,
//   quantidade: 2,
//   refeicaoId: 5
// };

// const ingrediente_16 ={
//   id: 16,
//   nome: pao,
//   quantidade: 1,
//   refeicaoId: 6
// };
// const ingrediente_17 ={
//   id: 17,
//   nome: queijo,
//   quantidade: 1,
//   refeicaoId: 6
// };
// const ingrediente_18 ={
//   id: 18,
//   nome: carne,
//   quantidade: 1,
//   refeicaoId: 6
// };

// const ingrediente_19 ={
//   id: 19,
//   nome: pao,
//   quantidade: 1,
//   refeicaoId: 7
// };
// const ingrediente_20 ={
//   id: 20,
//   nome: queijo,
//   quantidade: 1,
//   refeicaoId: 7
// };
// const ingrediente_21 ={
//   id: 21,
//   nome: carne,
//   quantidade: 1,
//   refeicaoId: 7
// };

// const ingrediente_22 ={
//   id: 22,
//   nome: pao,
//   quantidade: 1,
//   refeicaoId: 8
// };
// const ingrediente_23 ={
//   id: 23,
//   nome: queijo,
//   quantidade: 1,
//   refeicaoId: 8
// };
// const ingrediente_24 ={
//   id: 24,
//   nome: carne,
//   quantidade: 1,
//   refeicaoId: 8
// };

// const ingrediente_25 ={
//   id: 25,
//   nome: pao,
//   quantidade: 1,
//   refeicaoId: 9
// };
// const ingrediente_26 ={
//   id: 26,
//   nome: queijo,
//   quantidade: 1,
//   refeicaoId: 9
// };
// const ingrediente_27 ={
//   id: 27,
//   nome: carne,
//   quantidade: 1,
//   refeicaoId: 9
// };
