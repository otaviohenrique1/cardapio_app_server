import { PrimaryGeneratedColumn, Column } from "typeorm";

export abstract class DadosBase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  codigo: string;

  @Column()
  data_cadastro: Date;

  @Column()
  data_modificacao_cadastro: Date;
}