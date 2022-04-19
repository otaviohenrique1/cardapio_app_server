import { BaseEntity, Column, Entity, Generated, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
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
  @JoinColumn({ name: 'clienteId' })
  cliente: Cliente;

  @Column({ type: 'integer', unsigned: true })
  clienteId: number;

  /* 1 pedido com 1 ou mais refeicoes */
  @OneToMany(() => PedidoRefeicao, refeicao => refeicao.pedido, {
    cascade: ['insert']
  })
  lista_refeicoes: PedidoRefeicao[];
}
