import { getConnection, MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";
import { Imagem } from "../entity/Imagem";
import { imagem_seeder } from "../seeder/imagem_seeder";

export class createImagem1648054225230 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('imagem', true);
    await queryRunner.createTable(new Table({
      name: 'imagem',
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
          name: 'path',
          type: 'varchar'
        },
        {
          name: 'refeicaoId',
          type: 'integer'
        },
      ],
    }), true);

    /* Seeder - Retirar quando for para producao */
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Imagem)
      .values(imagem_seeder)
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('imagem');
  }
}

/* Seeder - Retirar quando for para producao */
// await getConnection()
// .createQueryBuilder()
// .insert()
// .into(Imagem)
// .values([
//   {
//     id: 1,
//     path: 'b3a397-1649275835960-a1.jpg',
//     refeicao: { id: 1 }
//   },
//   {
//     id: 2,
//     path: 'c9df74-1649275835962-a1.jpg',
//     refeicao: { id: 1 }
//   },
//   {
//     id: 3,
//     path: 'ff62b9-1649275835963-a1.jpg',
//     refeicao: { id: 1 }
//   },
//   {
//     id: 4,
//     path: '976556-1649278001315-a1.jpg',
//     refeicao: { id: 2 }
//   },
//   {
//     id: 5,
//     path: 'fcd41f-1649278001317-a1.jpg',
//     refeicao: { id: 2 }
//   },
//   {
//     id: 6,
//     path: '21ee80-1649278001318-a1.jpg',
//     refeicao: { id: 2 }
//   },
//   {
//     id: 7,
//     path: '58adf1-1649282139514-a1.jpg',
//     refeicao: { id: 3 }
//   },
//   {
//     id: 8,
//     path: 'c2101d-1649282139515-a1.jpg',
//     refeicao: { id: 3 }
//   },
//   {
//     id: 9,
//     path: 'c98f4b-1649282139516-a1.jpg',
//     refeicao: { id: 3 }
//   },
//   {
//     id: 10,
//     path: '53d6bb-1649285274525-a1.jpg',
//     refeicao: { id: 4 }
//   },
//   {
//     id: 11,
//     path: '5f06c1-1649285274528-a1.jpg',
//     refeicao: { id: 4 }
//   },
//   {
//     id: 12,
//     path: 'bb1020-1649285274529-a1.jpg',
//     refeicao: { id: 4 }
//   },
//   {
//     id: 13,
//     path: 'f8a7ae-1649285561595-a1.jpg',
//     refeicao: { id: 5 }
//   },
//   {
//     id: 14,
//     path: 'e6c978-1649285561596-a1.jpg',
//     refeicao: { id: 5 }
//   },
//   {
//     id: 15,
//     path: '768a22-1649285561597-a1.jpg',
//     refeicao: { id: 5 }
//   },
//   {
//     id: 16,
//     path: '858568-1649285824901-a1.jpg',
//     refeicao: { id: 6 }
//   },
//   {
//     id: 17,
//     path: 'b30734-1649285824904-a1.jpg',
//     refeicao: { id: 6 }
//   },
//   {
//     id: 18,
//     path: 'b3639e-1649285824905-a1.jpg',
//     refeicao: { id: 6 }
//   }
// ])
// .execute();

/* Seeder - Retirar quando for para producao */
// await queryRunner.query("INSERT INTO imagem (id, path, refeicaoId) VALUES (1,'b3a397-1649275835960-a1.jpg',1),(2,'c9df74-1649275835962-a1.jpg',1),(3,'ff62b9-1649275835963-a1.jpg',1),(4,'976556-1649278001315-a1.jpg',2),(5,'fcd41f-1649278001317-a1.jpg',2),(6,'21ee80-1649278001318-a1.jpg',2),(7,'58adf1-1649282139514-a1.jpg',3),(8,'c2101d-1649282139515-a1.jpg',3),(9,'c98f4b-1649282139516-a1.jpg',3),(10,'53d6bb-1649285274525-a1.jpg',4),(11,'5f06c1-1649285274528-a1.jpg',4),(12,'bb1020-1649285274529-a1.jpg',4),(13,'f8a7ae-1649285561595-a1.jpg',5),(14,'e6c978-1649285561596-a1.jpg',5),(15,'768a22-1649285561597-a1.jpg',5),(16,'858568-1649285824901-a1.jpg',6),(17,'b30734-1649285824904-a1.jpg',6),(18,'b3639e-1649285824905-a1.jpg',6);");