import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { PedidoRefeicao } from "./PedidoRefeicao";

@Entity()
export class PedidoIngredienteRemovido extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
 
  /* muitos opcionais em 1 pedido */
  @ManyToOne(() => PedidoRefeicao, pedido_refeicao => pedido_refeicao.lista_ingredientes_removidos)
  @JoinColumn({ name: 'pedidoRefeicaoId' })
  pedido_refeicao: PedidoRefeicao;

  @Column({ type: 'integer', unsigned: true })
  pedidoRefeicaoId: number;
}
