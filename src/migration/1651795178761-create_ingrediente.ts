import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { getConnection } from "typeorm";
import { Ingrediente } from "../entity/Ingrediente";
import { coluna_removivel, coluna_nome, coluna_primary_key, coluna_quantidade, coluna_refeicaoId, coluna_unidade_quantidade, if_table_not_exist } from "../utils/constantes_migration";
import { IngredienteTypes } from "../utils/interfaces_types";

const NOME_TABELA = 'ingrediente';

export class createIngrediente1651795178761 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA, if_table_not_exist);
    await queryRunner.createTable(new Table({
      name: NOME_TABELA,
      columns: [
        coluna_primary_key,
        coluna_nome,
        coluna_quantidade,
        coluna_unidade_quantidade,
        coluna_removivel,
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

const pao = "Pão"
const queijo = "Queijo"
const carne = "Carne"

const ingrediente_1: IngredienteTypes = {
  id: 1,
  nome: pao,
  quantidade: 1,
  refeicaoId: 1,
  unidade_quantidade: "unidade (un)",
  removivel: false
};
const ingrediente_2: IngredienteTypes = {
  id: 2,
  nome: queijo,
  quantidade: 2,
  refeicaoId: 1,
  unidade_quantidade: "unidade (un)",
  removivel: true
};
const ingrediente_3: IngredienteTypes = {
  id: 3,
  nome: carne,
  quantidade: 2,
  refeicaoId: 1,
  unidade_quantidade: "unidade (un)",
  removivel: true
};

const ingrediente_4: IngredienteTypes = {
  id: 4,
  nome: pao,
  quantidade: 1,
  refeicaoId: 2,
  unidade_quantidade: "unidade (un)",
  removivel: false
};
const ingrediente_5: IngredienteTypes = {
  id: 5,
  nome: queijo,
  quantidade: 1,
  refeicaoId: 2,
  unidade_quantidade: "unidade (un)",
  removivel: true
};
const ingrediente_6: IngredienteTypes = {
  id: 6,
  nome: carne,
  quantidade: 1,
  refeicaoId: 2,
  unidade_quantidade: "unidade (un)",
  removivel: true
};

const ingrediente_7: IngredienteTypes = {
  id: 7,
  nome: pao,
  quantidade: 1,
  refeicaoId: 3,
  unidade_quantidade: "unidade (un)",
  removivel: false
};
const ingrediente_8: IngredienteTypes = {
  id: 8,
  nome: queijo,
  quantidade: 1,
  refeicaoId: 3,
  unidade_quantidade: "unidade (un)",
  removivel: true
};
const ingrediente_9: IngredienteTypes = {
  id: 9,
  nome: carne,
  quantidade: 1,
  refeicaoId: 3,
  unidade_quantidade: "unidade (un)",
  removivel: true
};

const ingrediente_10: IngredienteTypes = {
  id: 10,
  nome: pao,
  quantidade: 1,
  refeicaoId: 4,
  unidade_quantidade: "unidade (un)",
  removivel: false
};
const ingrediente_11: IngredienteTypes = {
  id: 11,
  nome: queijo,
  quantidade: 1,
  refeicaoId: 4,
  unidade_quantidade: "unidade (un)",
  removivel: true
};
const ingrediente_12: IngredienteTypes = {
  id: 12,
  nome: carne,
  quantidade: 1,
  refeicaoId: 4,
  unidade_quantidade: "unidade (un)",
  removivel: true
};

const ingrediente_13: IngredienteTypes = {
  id: 13,
  nome: pao,
  quantidade: 1,
  refeicaoId: 5,
  unidade_quantidade: "unidade (un)",
  removivel: false
};
const ingrediente_14: IngredienteTypes = {
  id: 14,
  nome: queijo,
  quantidade: 2,
  refeicaoId: 5,
  unidade_quantidade: "unidade (un)",
  removivel: true
};
const ingrediente_15: IngredienteTypes = {
  id: 15,
  nome: carne,
  quantidade: 2,
  refeicaoId: 5,
  unidade_quantidade: "unidade (un)",
  removivel: true
};

const ingrediente_16: IngredienteTypes = {
  id: 16,
  nome: pao,
  quantidade: 1,
  refeicaoId: 6,
  unidade_quantidade: "unidade (un)",
  removivel: false
};
const ingrediente_17: IngredienteTypes = {
  id: 17,
  nome: queijo,
  quantidade: 1,
  refeicaoId: 6,
  unidade_quantidade: "unidade (un)",
  removivel: true
};
const ingrediente_18: IngredienteTypes = {
  id: 18,
  nome: carne,
  quantidade: 1,
  refeicaoId: 6,
  unidade_quantidade: "unidade (un)",
  removivel: true
};

const ingrediente_19: IngredienteTypes = {
  id: 19,
  nome: pao,
  quantidade: 1,
  refeicaoId: 7,
  unidade_quantidade: "unidade (un)",
  removivel: false
};
const ingrediente_20: IngredienteTypes = {
  id: 20,
  nome: queijo,
  quantidade: 1,
  refeicaoId: 7,
  unidade_quantidade: "unidade (un)",
  removivel: true
};
const ingrediente_21: IngredienteTypes = {
  id: 21,
  nome: carne,
  quantidade: 1,
  refeicaoId: 7,
  unidade_quantidade: "unidade (un)",
  removivel: true
};

const ingrediente_22: IngredienteTypes = {
  id: 22,
  nome: pao,
  quantidade: 1,
  refeicaoId: 8,
  unidade_quantidade: "unidade (un)",
  removivel: false
};
const ingrediente_23: IngredienteTypes = {
  id: 23,
  nome: queijo,
  quantidade: 1,
  refeicaoId: 8,
  unidade_quantidade: "unidade (un)",
  removivel: true
};
const ingrediente_24: IngredienteTypes = {
  id: 24,
  nome: carne,
  quantidade: 1,
  refeicaoId: 8,
  unidade_quantidade: "unidade (un)",
  removivel: true
};

const ingrediente_25: IngredienteTypes = {
  id: 25,
  nome: pao,
  quantidade: 1,
  refeicaoId: 9,
  unidade_quantidade: "unidade (un)",
  removivel: false
};
const ingrediente_26: IngredienteTypes = {
  id: 26,
  nome: queijo,
  quantidade: 1,
  refeicaoId: 9,
  unidade_quantidade: "unidade (un)",
  removivel: true
};
const ingrediente_27: IngredienteTypes = {
  id: 27,
  nome: carne,
  quantidade: 1,
  refeicaoId: 9,
  unidade_quantidade: "unidade (un)",
  removivel: true
};
