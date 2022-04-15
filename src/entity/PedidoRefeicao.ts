import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pedido } from "./Pedido";

@Entity('pedido_refeicao')
export class PedidoRefeicao extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  preco: number;

  @Column()
  quantidade: number;

  /* muitas refeicoes em 1 pedido */
  @ManyToOne(() => Pedido, pedido => pedido.lista_refeicoes)
  pedido_refeicao: Pedido;
}
