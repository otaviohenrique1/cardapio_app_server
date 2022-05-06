import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { PedidoItem } from "./PedidoItem";
import Refeicao from "./Refeicao";

@Entity('pedido_opcional_adicionado')
export class IngredienteOpcional extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  preco: number;
  
  /* muitos opcionais em 1 pedido */
  @ManyToOne(() => PedidoItem, pedido_refeicao => pedido_refeicao.ingredientes_opcionais)
  @JoinColumn({ name: 'pedidoRefeicaoId' })
  pedido_refeicao: PedidoItem;

  @Column({ type: 'integer', unsigned: true })
  pedidoRefeicaoId: number;

  /* muitos opcionais em 1 refeicao */
  @ManyToOne(() => Refeicao, refeicao => refeicao.lista_opcionais)
  @JoinColumn({ name: 'refeicaoId' })
  refeicao: Refeicao;

  @Column({ type: 'integer', unsigned: true })
  refeicaoId: number;
}
