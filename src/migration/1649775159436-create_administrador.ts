import { MigrationInterface, QueryRunner, Table } from "typeorm";
// import { getConnection } from "typeorm";
// import { Administrador } from "../entity/Administrador";
import { coluna_codigo, coluna_data_cadastro, coluna_data_modificacao_cadastro, coluna_email, coluna_nome, coluna_primary_key, coluna_senha, if_table_not_exist } from "../utils/constantes_migration";
// import { FormatadorCrypto } from "../utils/FormatadorCrypto";

const NOME_TABELA = 'administrador';

export class createAdministrador1649775159436 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA, if_table_not_exist);
    await queryRunner.createTable(new Table({
      name: NOME_TABELA,
      columns: [
        coluna_primary_key,
        coluna_nome,
        coluna_email,
        coluna_senha,
        coluna_codigo,
        coluna_data_cadastro,
        coluna_data_modificacao_cadastro,
      ],
    }), if_table_not_exist);

    // await getConnection()
    //   .createQueryBuilder()
    //   .insert()
    //   .into(Administrador)
    //   .values([
    //     administrador_1,
    //     administrador_2,
    //     administrador_3,
    //     administrador_4,
    //     administrador_5,
    //     administrador_6
    //   ])
    //   .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA);
  }
}

// const administrador_1 = {
//   id: 1,
//   nome: 'Reginaldo',
//   codigo: 'ccc51e54-0be0-4c43-a104-d6469d65b6e1',
//   email: 'reginaldo@email.com',
//   senha: FormatadorCrypto.mensagemSHA512('0123456789'),
//   data_cadastro: new Date(),
//   data_modificacao_cadastro: new Date()
// };

// const administrador_2 = {
//   id: 2,
//   nome: 'Ana',
//   codigo: 'c64cb517-1571-4aca-8f67-98aaa1da3f4d',
//   email: 'ana@email.com',
//   senha: FormatadorCrypto.mensagemSHA512('0123456789'),
//   data_cadastro: new Date(),
//   data_modificacao_cadastro: new Date()
// };

// const administrador_3 = {
//   id: 3,
//   nome: 'Maria',
//   codigo: 'edfa8b60-96f4-4423-b930-7acdc11b6878',
//   email: 'maria@email.com',
//   senha: FormatadorCrypto.mensagemSHA512('0123456789'),
//   data_cadastro: new Date(),
//   data_modificacao_cadastro: new Date()
// };

// const administrador_4 = {
//   id: 4,
//   nome: 'Luana',
//   codigo: '17ae7327-9a39-4519-823f-0db4b017e391',
//   email: 'luana@email.com',
//   senha: FormatadorCrypto.mensagemSHA512('0123456789'),
//   data_cadastro: new Date(),
//   data_modificacao_cadastro: new Date()
// };

// const administrador_5 = {
//   id: 5,
//   nome: 'Jose',
//   codigo: '312b0b70-e108-434b-8fac-bd451f095038',
//   email: 'jose@email.com',
//   senha: FormatadorCrypto.mensagemSHA512('0123456789'),
//   data_cadastro: new Date(),
//   data_modificacao_cadastro: new Date()
// };

// const administrador_6 = {
//   id: 6,
//   nome: 'Sara',
//   codigo: '9f555679-a932-4465-b636-5a1a26ecfa0e',
//   email: 'sara@email.com',
//   senha: FormatadorCrypto.mensagemSHA512('0123456789'),
//   data_cadastro: new Date(),
//   data_modificacao_cadastro: new Date()
// };