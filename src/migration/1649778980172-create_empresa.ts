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
        empresa_1, empresa_2
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
