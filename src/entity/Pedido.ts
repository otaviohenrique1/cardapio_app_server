import { BaseEntity, Column, Entity, Generated, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./Cliente";
import { PedidoItem } from "./PedidoItem";

@Entity('pedido')
export class Pedido extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status_pedido: string; // 'em produção', 'em transporte' e 'entregue'

  @Column()
  preco_total: number; // Preco de cada refeicao e cada opcional acicionado

  @Column()
  @Generated('uuid')
  codigo: string;

  @Column()
  data_cadastro: Date;

  @Column()
  data_modificacao_cadastro: Date;
  
  // @Column()
  // observacao: string;

  /* 1 pedido para 1 cliente */
  @OneToMany(() => Cliente, cliente => cliente.pedidos, {
    cascade: ['insert']
  })
  @JoinColumn({ name: 'clienteId' })
  cliente: Cliente;

  @Column({ type: 'integer', unsigned: true })
  clienteId: number;

  /* 1 pedido com 1 ou mais itens */
  @OneToMany(() => PedidoItem, item => item.pedido, {
    cascade: ['insert']
  })
  lista_refeicoes: PedidoItem[];
}
