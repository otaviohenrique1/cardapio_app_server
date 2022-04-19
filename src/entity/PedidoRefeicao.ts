import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pedido } from "./Pedido";
import Refeicao from "./Refeicao";

@Entity('pedido_refeicao')
export class PedidoRefeicao extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Refeicao, (refeicao) => refeicao.pedido_refeicao)
  @JoinColumn({ name: 'refeicaoId' })
  refeicao: Pedido;

  @Column({ type: 'integer', unsigned: true })
  refeicaoId: number;

  @Column()
  quantidade: number;

  /* muitas refeicoes em 1 pedido */
  @ManyToOne(() => Pedido, pedido => pedido.lista_refeicoes)
  @JoinColumn({ name: 'pedidoId' })
  pedido: Pedido;

  @Column({ type: 'integer', unsigned: true })
  pedidoId: number;
}
