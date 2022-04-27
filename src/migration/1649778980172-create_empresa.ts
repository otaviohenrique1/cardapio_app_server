import { getConnection, MigrationInterface, QueryRunner, Table } from "typeorm";
import { Empresa } from "../entity/Empresa";
import { coluna_nome, coluna_email, coluna_senha, coluna_status_cadastro, coluna_data_cadastro, coluna_data_modificacao_cadastro, if_table_not_exist, coluna_primary_key, coluna_codigo } from "../utils/constantes_migration";
import { FormatadorCrypto } from "../utils/FormatadorCrypto";

const NOME_TABELA = 'empresa';

export class createEmpresa1649778980172 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA, if_table_not_exist);
    await queryRunner.createTable(new Table({
      name: NOME_TABELA,
      columns: [
        coluna_primary_key,
        coluna_nome,
        coluna_email,
        coluna_senha,
        coluna_status_cadastro,
        coluna_codigo,
        coluna_data_cadastro,
        coluna_data_modificacao_cadastro,
      ],
    }), if_table_not_exist);

    /* Seeder - Retirar quando for para producao */
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Empresa)
      .values([
        empresa_1,
        empresa_2,
        empresa_3,
        empresa_4,
        empresa_5,
        empresa_6
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA);
  }
}

const empresa_1 = {
  id: 1,
  nome: 'Bola',
  email: 'bola@email.com',
  senha: FormatadorCrypto.mensagemSHA512('0123456789'),
  status_cadastro: true,
  codigo: 'faf1137a-43fe-475f-9018-67c967122b49',
  data_cadastro: new Date(),
  data_modificacao_cadastro: new Date(),
};

const empresa_2 = {
  id: 2,
  nome: 'Cubo',
  email: 'cubo@email.com',
  senha: FormatadorCrypto.mensagemSHA512('9876543210'),
  status_cadastro: true,
  codigo: 'cf765dad-140b-4cff-9ffd-f33a83ed81aa',
  data_cadastro: new Date(),
  data_modificacao_cadastro: new Date(),
};

const empresa_3 = {
  id: 3,
  nome: 'Pirata lanches',
  email: 'piratalanches@email.com',
  senha: FormatadorCrypto.mensagemSHA512('0123456789'),
  status_cadastro: true,
  codigo: 'e1c1c2f4-7791-4922-85e5-b899eb5fc29d',
  data_cadastro: new Date(),
  data_modificacao_cadastro: new Date(),
};

const empresa_4 = {
  id: 4,
  nome: 'Burguer lanches',
  email: 'burguerlanches@email.com',
  senha: FormatadorCrypto.mensagemSHA512('0123456789'),
  status_cadastro: true,
  codigo: 'dbff0794-d3ef-41c6-ac21-7f6cd15ab6ac',
  data_cadastro: new Date(),
  data_modificacao_cadastro: new Date(),
};

const empresa_5 = {
  id: 5,
  nome: 'Restaurante praiano',
  email: 'restaurantepraiano@email.com',
  senha: FormatadorCrypto.mensagemSHA512('0123456789'),
  status_cadastro: true,
  codigo: '2b3b0135-8567-40ef-93b5-8bbb4519db5a',
  data_cadastro: new Date(),
  data_modificacao_cadastro: new Date(),
};

const empresa_6 = {
  id: 6,
  nome: 'Piramide',
  email: 'piramide@email.com',
  senha: FormatadorCrypto.mensagemSHA512('0123456789'),
  status_cadastro: true,
  codigo: '1adf4326-b076-43f7-8f53-f7748c3922a3',
  data_cadastro: new Date(),
  data_modificacao_cadastro: new Date(),
};
