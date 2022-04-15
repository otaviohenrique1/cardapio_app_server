import { BaseEntity, Column, Entity, Generated, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./Cliente";
import { PedidoRefeicao } from "./PedidoRefeicao";

@Entity('pedido')
export class Pedido extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status_pedido: string;

  @Column()
  preco_total: number;

  @Column()
  @Generated('uuid')
  codigo: string;

  @Column()
  data_cadastro: Date;

  @Column()
  data_modificacao_cadastro: Date;
  
  /* 1 pedido para 1 cliente */
  @OneToMany(() => Cliente, cliente => cliente.pedidos, {
    cascade: ['insert']
  })
  cliente: Cliente;

  /* 1 pedido com 1 ou mais refeicoes */
  @OneToMany(() => PedidoRefeicao, refeicao => refeicao.pedido_refeicao, {
    cascade: ['insert']
  })
  lista_refeicoes: PedidoRefeicao[];
}
