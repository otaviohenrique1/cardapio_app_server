import { Entity, Column, OneToMany, Generated, PrimaryGeneratedColumn, BaseEntity } from "typeorm";
import Refeicao from "./Refeicao";

@Entity('usuario')
export default class Usuario extends BaseEntity {
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
  
  @Column()
  email: string;

  @Column()
  senha: string;
  
  @OneToMany(() => Refeicao, (refeicao) => refeicao.usuario)
  refeicoes: Refeicao[];
}
