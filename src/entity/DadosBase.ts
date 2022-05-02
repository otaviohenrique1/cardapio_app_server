import {BaseEntity, Column, Generated, PrimaryGeneratedColumn} from "typeorm";

export abstract class DadosBase extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  @Generated('uuid')
  codigo: string;

  @Column()
  data_cadastro: Date;

  @Column()
  data_modificacao_cadastro: Date;
}
