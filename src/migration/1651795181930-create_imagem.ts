import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { getConnection } from "typeorm";
import { Imagem } from "../entity/Imagem";
import { coluna_path, coluna_primary_key, coluna_refeicaoId, if_table_not_exist } from "../utils/constantes_migration";
import { ImagemTypes } from "../utils/interfaces_types";

const NOME_TABELA = 'imagem';

export class createImagem1651795181930 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA, if_table_not_exist);
    await queryRunner.createTable(new Table({
      name: NOME_TABELA,
      columns: [
        coluna_primary_key,
        coluna_path,
        coluna_refeicaoId,
      ],
    }), if_table_not_exist);

    /* Seeder - Retirar quando for para producao */
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Imagem)
      .values([
        imagem_1_refeicao_1, imagem_2_refeicao_1, imagem_3_refeicao_1,
        imagem_4_refeicao_2, imagem_5_refeicao_2, imagem_6_refeicao_2,
        imagem_7_refeicao_3, imagem_8_refeicao_3, imagem_9_refeicao_3,
        imagem_10_refeicao_4, imagem_11_refeicao_4, imagem_12_refeicao_4,
        imagem_13_refeicao_5, imagem_14_refeicao_5, imagem_15_refeicao_5,
        imagem_16_refeicao_6, imagem_17_refeicao_6, imagem_18_refeicao_6,
        imagem_19_refeicao_7, imagem_20_refeicao_7, imagem_21_refeicao_7,
        imagem_22_refeicao_8, imagem_23_refeicao_8, imagem_24_refeicao_8,
        imagem_25_refeicao_9, imagem_26_refeicao_9, imagem_27_refeicao_9
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA);
  }
}

const imagem_1_refeicao_1: ImagemTypes = {
  id: 1,
  path: '02dade-1650319138587-a1.jpg',
  refeicaoId: 1
};
const imagem_2_refeicao_1: ImagemTypes = {
  id: 2,
  path: '53d6bb-1649285274525-a1.jpg',
  refeicaoId: 1
};
const imagem_3_refeicao_1: ImagemTypes = {
  id: 3,
  path: 'b3639e-1649285824905-a1.jpg',
  refeicaoId: 1
};

const imagem_4_refeicao_2: ImagemTypes = {
  id: 4,
  path: 'd2fd26-1650319106210-a1.jpg',
  refeicaoId: 2
};
const imagem_5_refeicao_2: ImagemTypes = {
  id: 5,
  path: '1a7be1-1649976571918-a1.jpg',
  refeicaoId: 2
};
const imagem_6_refeicao_2: ImagemTypes = {
  id: 6,
  path: '58adf1-1649282139514-a1.jpg',
  refeicaoId: 2
};

const imagem_7_refeicao_3: ImagemTypes = {
  id: 7,
  path: 'b3a397-1649275835960-a1.jpg',
  refeicaoId: 3
};
const imagem_8_refeicao_3: ImagemTypes = {
  id: 8,
  path: 'e6c978-1649285561596-a1.jpg',
  refeicaoId: 3
};
const imagem_9_refeicao_3: ImagemTypes = {
  id: 9,
  path: '21ee80-1649278001318-a1.jpg',
  refeicaoId: 3
};

const imagem_10_refeicao_4: ImagemTypes = {
  id: 10,
  path: '5f06c1-1649285274528-a1.jpg',
  refeicaoId: 4
};
const imagem_11_refeicao_4: ImagemTypes = {
  id: 11,
  path: 'bb1020-1649285274529-a1.jpg',
  refeicaoId: 4
};
const imagem_12_refeicao_4: ImagemTypes = {
  id: 12,
  path: 'f32c5e-1650319326831-a1.jpg',
  refeicaoId: 4
};

const imagem_13_refeicao_5: ImagemTypes = {
  id: 13,
  path: '221772-1650319059213-a1.jpg',
  refeicaoId: 5
};
const imagem_14_refeicao_5: ImagemTypes = {
  id: 14,
  path: '768a22-1649285561597-a1.jpg',
  refeicaoId: 5
};
const imagem_15_refeicao_5: ImagemTypes = {
  id: 15,
  path: 'c2101d-1649282139515-a1.jpg',
  refeicaoId: 5
};

const imagem_16_refeicao_6: ImagemTypes = {
  id: 16,
  path: 'f8a7ae-1649285561595-a1.jpg',
  refeicaoId: 6
};
const imagem_17_refeicao_6: ImagemTypes = {
  id: 17,
  path: '225340-1649976557822-a1.jpg',
  refeicaoId: 6
};
const imagem_18_refeicao_6: ImagemTypes = {
  id: 18,
  path: '858568-1649285824901-a1.jpg',
  refeicaoId: 6
};

const imagem_19_refeicao_7: ImagemTypes = {
  id: 19,
  path: 'c75af5-1649976538319-a1.jpg',
  refeicaoId: 7
};
const imagem_20_refeicao_7: ImagemTypes = {
  id: 20,
  path: 'fcd41f-1649278001317-a1.jpg',
  refeicaoId: 7
};
const imagem_21_refeicao_7: ImagemTypes = {
  id: 21,
  path: '25af51-1650319088858-a1.jpg',
  refeicaoId: 7
};

const imagem_22_refeicao_8: ImagemTypes = {
  id: 22,
  path: '976556-1649278001315-a1.jpg',
  refeicaoId: 8
};
const imagem_23_refeicao_8: ImagemTypes = {
  id: 23,
  path: 'c98f4b-1649282139516-a1.jpg',
  refeicaoId: 8
};
const imagem_24_refeicao_8: ImagemTypes = {
  id: 24,
  path: 'ff62b9-1649275835963-a1.jpg',
  refeicaoId: 8
};

const imagem_25_refeicao_9: ImagemTypes = {
  id: 25,
  path: '3e7ee9-1650319120608-a1.jpg',
  refeicaoId: 9
};
const imagem_26_refeicao_9: ImagemTypes = {
  id: 26,
  path: 'b30734-1649285824904-a1.jpg',
  refeicaoId: 9
};
const imagem_27_refeicao_9: ImagemTypes = {
  id: 27,
  path: 'c9df74-1649275835962-a1.jpg',
  refeicaoId: 9
};
