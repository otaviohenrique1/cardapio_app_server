import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { DadosBase } from "./DadosBase";
// import { JoinColumn } from "typeorm";
import Refeicao from "./Refeicao";

@Entity('usuario')
export default class Usuario extends DadosBase {
  @Column()
  email: string;

  @Column()
  senha: string;
  
  @OneToMany(() => Refeicao, (refeicao) => refeicao.id_usuario)
  // @JoinColumn({ name: 'id_usuario' })
  refeicoes: Refeicao[];
}

/*
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
// import { JoinColumn } from "typeorm";
import Refeicao from "./Refeicao";

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
  codigo: string;

  @Column()
  data_cadastro: Date;

  @Column()
  data_modificacao_cadastro: Date;
  
  @OneToMany(() => Refeicao, (refeicao) => refeicao.id_usuario)
  // @JoinColumn({ name: 'id_usuario' })
  refeicoes: Refeicao[];
}
*/