import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('usuario')
export default class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  data_cadastro: Date;
}