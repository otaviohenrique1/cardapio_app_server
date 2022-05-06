import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { PedidoItem } from "./PedidoItem";

@Entity('pedido_ingrediente_removido')
export class IngredienteRemovido extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
 
  /* muitos opcionais em 1 pedido */
  @ManyToOne(() => PedidoItem, pedido_refeicao => pedido_refeicao.ingredientes_removidos)
  @JoinColumn({ name: 'pedidoRefeicaoId' })
  pedido_refeicao: PedidoItem;

  @Column({ type: 'integer', unsigned: true })
  pedidoRefeicaoId: number;
}
