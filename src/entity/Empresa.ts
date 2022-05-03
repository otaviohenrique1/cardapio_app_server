import { Entity, Column, OneToMany, Generated, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinColumn } from "typeorm";
import { Administrador } from "./Administrador";
import { Cliente } from "./Cliente";
import Refeicao from "./Refeicao";

@Entity('empresa')
export default class Empresa extends BaseEntity {
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

  @Column()
  status_cadastro: boolean; // 'Ativo' ou 'Inativo'
  
  @OneToMany(() => Refeicao, (refeicao) => refeicao.empresa)
  refeicoes: Refeicao[];

  /* muitas empresas cadastradas por 1 administrador  */
  @ManyToOne(() => Administrador, (administrador) => administrador.empresas)
  @JoinColumn({ name: 'administradorId' })
  administrador: Administrador;

  @Column({ type: 'integer', unsigned: true })
  administradorId: number;

  /* 1 empresa para muitos clientes */
  @OneToMany(() => Cliente, (cliente) => cliente.empresa)
  clientes: Cliente[];
}
