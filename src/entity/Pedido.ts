import { BaseEntity, Column, Entity, Generated, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./Cliente";
import Refeicao from "./Refeicao";

@Entity('pedido')
export class Pedido extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status_pedido: string;

  @Column()
  preco_pedido: number;
  
  @Column()
  @Generated('uuid')
  codigo: string;
  
  @Column()
  data_cadastro: Date;
  
  @Column()
  data_modificacao_cadastro: Date;

  /* 1 pedido para 1 cliente */
  @OneToOne(() => Cliente, cliente => cliente.pedido)
  @JoinColumn()
  cliente: Cliente;

  /* 1 pedido com 1 ou mais refeicoes */
  @OneToMany(() => Refeicao, refeicao => refeicao.pedido)
  refeicoes: Refeicao[];
}
