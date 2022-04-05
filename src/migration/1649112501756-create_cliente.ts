import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class createCliente1649112501756 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'cliente',
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
          name: 'rua',
          type: 'varchar',
          isNullable: false,
          length: '255'
        },
        {
          name: 'numero',
          type: 'varchar',
          isNullable: false,
          length: '255'
        },
        {
          name: 'bairro',
          type: 'varchar',
          isNullable: false,
          length: '255'
        },
        {
          name: 'cidade',
          type: 'varchar',
          isNullable: false,
          length: '255'
        },
        {
          name: 'estado',
          type: 'varchar',
          isNullable: false,
          length: '255'
        },
        {
          name: 'cep',
          type: 'varchar',
          isNullable: false,
          length: '255'
        },
        {
          name: 'telefone1',
          type: 'varchar',
          isNullable: false,
          length: '255'
        },
        {
          name: 'telefone2',
          type: 'varchar',
          isNullable: false,
          length: '255'
        },
        {
          name: 'codigo',
          type: 'varchar',
          isGenerated: true,
          generationStrategy: 'uuid'
        },
        {
          name: 'data_cadastro',
          type: 'datetime'
        },
        {
          name: 'data_modificacao_cadastro',
          type: 'datetime'
        },
      ]
    }));
    await queryRunner.addColumn('cliente', new TableColumn({
      name: 'email',
      type: 'varchar',
      isNullable: false,
      length: '255'
    }));
    await queryRunner.addColumn('cliente', new TableColumn({
      name: 'senha',
      type: 'varchar',
      isNullable: false,
      length: '255'
    }));
    await queryRunner.dropColumn('cliente', 'telefone1');
    await queryRunner.dropColumn('cliente', 'telefone2');
    await queryRunner.addColumn('cliente', new TableColumn({
      name: 'telefone',
      type: 'varchar',
      isNullable: false,
      length: '255'
    }));
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('cliente');
  }
}
