import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pedido } from "./Pedido";
import { IngredienteRemovido } from "./IngredientesRemovidos";
import { IngredienteOpcional } from "./IngredientesOpcionais";
import Refeicao from "./Refeicao";

 /* Ver se vai renomear de 'PedidoRefeicao' para 'PedidoItem' ou 'PedidoProduto' */
@Entity('pedido_refeicao')
export class PedidoItem extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  /* Arrumar */
  /* Ver se vai mudar de 'OneToOne' para 'OneToMany'*/
  /* Ver se vai renomear de 'refeicaoId' para produtoId */
  @OneToOne(() => Refeicao, (refeicao) => refeicao.pedido_item)
  @JoinColumn({ name: 'refeicaoId' })
  refeicao: Refeicao;

  /* Ver se vai renomear de 'refeicaoId' para produtoId */
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

  /* 1 refeicao do pedido pode ter nenhum ou 1 ou mais opcionais */
  /* Ver se vai ser opcional */
  @OneToMany(() => IngredienteOpcional, opcional => opcional.pedido_refeicao, {
    cascade: ['insert']
  })
  ingredientes_opcionais: IngredienteOpcional[];

  /* Nenhum ou 1 ou mais ingredientes podem ser removidos de 1 refeicao */
  /* Ver se vai ser opcional */
  @OneToMany(() => IngredienteRemovido, ingrediente_removido => ingrediente_removido.pedido_refeicao, {
    cascade: ['insert']
  })
  ingredientes_removidos: IngredienteRemovido[];
}
