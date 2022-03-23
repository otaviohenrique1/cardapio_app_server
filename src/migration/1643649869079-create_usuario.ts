import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createUsuario1643649869079 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'usuario',
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
          name: 'nome',
          type: 'varchar',
          isNullable: false,
          length: '255'
        },
        {
          name: 'email',
          type: 'varchar',
          isNullable: false,
          length: '255'
        },
        {
          name: 'senha',
          type: 'varchar'
        },
        {
          name: 'codigo',
          type: 'varchar',
          isNullable: false,
          length: '255'
        },
        {
          name: 'data_cadastro',
          type: 'datetime'
        },
        {
          name: 'data_modificacao_cadastro',
          type: 'datetime'
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('usuario');
  }
}
