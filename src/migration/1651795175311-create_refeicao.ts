import { getConnection, MigrationInterface, QueryRunner, Table } from "typeorm";
import Refeicao from "../entity/Refeicao";
import { coluna_ativo, coluna_codigo, coluna_data_cadastro, coluna_data_modificacao_cadastro, coluna_descricao, coluna_nome, coluna_preco, coluna_primary_key, coluna_quantidade, coluna_tipo_produto, coluna_unidade_quantidade, coluna_empresaId, if_table_not_exist } from "../utils/constantes_migration";
import { RefeicaoTypes } from "../utils/interfaces_types";

const NOME_TABELA = 'refeicao';

export class createRefeicao1651795175311 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA, if_table_not_exist);
    await queryRunner.createTable(new Table({
      name: NOME_TABELA,
      columns: [
        coluna_primary_key,
        coluna_nome,
        coluna_preco,
        coluna_ativo,
        coluna_codigo,
        coluna_descricao,
        coluna_quantidade,
        coluna_unidade_quantidade,
        coluna_tipo_produto,
        coluna_data_cadastro,
        coluna_data_modificacao_cadastro,
        coluna_empresaId,
      ],
    }), if_table_not_exist);

    /* Seeder - Retirar quando for para producao */
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Refeicao)
      .values([
        refeicao_1, refeicao_2, refeicao_3,
        refeicao_4, refeicao_5, refeicao_6,
        refeicao_7, refeicao_8, refeicao_9
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA);
  }
}

const refeicao_1: RefeicaoTypes = {
  id: 1,
  nome: 'X-Burguer 1',
  codigo: '622f056b-1294-450e-9ee0-52fd5e94f164',
  ativo: true,
  preco: 15,
  descricao: 'Hamburguer basico 1',
  data_cadastro: new Date(),
  data_modificacao_cadastro: new Date,
  empresaId: 1,
  quantidade: 1,
  unidade_quantidade: "unidade (un)",
  tipo_produto: "Comida"
};

const refeicao_2: RefeicaoTypes = {
  id: 2,
  nome: 'X-Burguer 2',
  codigo: 'c409b0ae-8eb3-45f4-8392-b44024391cc2',
  ativo: true,
  preco: 12,
  descricao: 'Hamburguer basico 2',
  data_cadastro: new Date(),
  data_modificacao_cadastro: new Date,
  empresaId: 1,
  quantidade: 1,
  unidade_quantidade: "unidade (un)",
  tipo_produto: "Comida"
};

const refeicao_3: RefeicaoTypes = {
  id: 3,
  nome: 'X-Burguer 3',
  codigo: '8215ea8f-798e-4dae-9d6c-1c286aca3e58',
  ativo: true,
  preco: 10,
  descricao: 'Hamburguer basico 3',
  data_cadastro: new Date(),
  data_modificacao_cadastro: new Date,
  empresaId: 2,
  quantidade: 1,
  unidade_quantidade: "unidade (un)",
  tipo_produto: "Comida"
};

const refeicao_4: RefeicaoTypes = {
  id: 4,
  nome: 'X-Burguer 4',
  codigo: '504e69f7-5d7e-433b-b939-d2cbb8cba9c7',
  ativo: true,
  preco: 20,
  descricao: 'Hamburguer basico 4',
  data_cadastro: new Date(),
  data_modificacao_cadastro: new Date,
  empresaId: 2,
  quantidade: 1,
  unidade_quantidade: "unidade (un)",
  tipo_produto: "Comida"
};

const refeicao_5: RefeicaoTypes = {
  id: 5,
  nome: 'X-Burguer 5',
  codigo: '1b1e69a4-12d4-434c-a723-8092d238bb6d',
  ativo: true,
  preco: 25,
  descricao: 'Hamburguer basico 5',
  data_cadastro: new Date(),
  data_modificacao_cadastro: new Date,
  empresaId: 3,
  quantidade: 1,
  unidade_quantidade: "unidade (un)",
  tipo_produto: "Comida"
};

const refeicao_6: RefeicaoTypes = {
  id: 6,
  nome: 'X-Burguer 6',
  codigo: '8fe089c6-1f8f-4319-8f82-a5d550458fdb',
  ativo: true,
  preco: 28,
  descricao: 'Hamburguer basico 6',
  data_cadastro: new Date(),
  data_modificacao_cadastro: new Date,
  empresaId: 3,
  quantidade: 1,
  unidade_quantidade: "unidade (un)",
  tipo_produto: "Comida"
};

const refeicao_7: RefeicaoTypes = {
  id: 7,
  nome: 'X-Burguer 7',
  codigo: '82d03edd-9ba3-4909-82f5-67332e115c1a',
  ativo: true,
  preco: 20,
  descricao: 'Hamburguer basico 7',
  data_cadastro: new Date(),
  data_modificacao_cadastro: new Date,
  empresaId: 4,
  quantidade: 1,
  unidade_quantidade: "unidade (un)",
  tipo_produto: "Comida"
};

const refeicao_8: RefeicaoTypes = {
  id: 8,
  nome: 'X-Burguer 8',
  codigo: '0a304aea-fe08-4f39-9f56-24abfd2ed65f',
  ativo: true,
  preco: 20,
  descricao: 'Hamburguer basico 8',
  data_cadastro: new Date(),
  data_modificacao_cadastro: new Date,
  empresaId: 4,
  quantidade: 1,
  unidade_quantidade: "unidade (un)",
  tipo_produto: "Comida"
};

const refeicao_9: RefeicaoTypes = {
  id: 9,
  nome: 'X-Burguer 9',
  codigo: '9b56e506-1519-4b81-aaf9-604ae6ed0f1c',
  ativo: true,
  preco: 20,
  descricao: 'Hamburguer basico 9',
  data_cadastro: new Date(),
  data_modificacao_cadastro: new Date,
  empresaId: 4,
  quantidade: 1,
  unidade_quantidade: "unidade (un)",
  tipo_produto: "Comida"
};
