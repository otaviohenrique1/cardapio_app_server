import { BaseEntity, Column, Entity, Generated, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./Cliente";
import Refeicao from "./Refeicao";

@Entity('pedido')
export class Pedido extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status_pedido: string;
  
  @Column()
  lista_refeicoes: string;
  
  @Column()
  preco_pedido: number;
  
  @Column()
  @Generated('uuid')
  codigo: string;
  
  @Column()
  data_cadastro: Date;
  
  @Column()
  data_modificacao_cadastro: Date;

  @ManyToOne(() => Cliente, cliente => cliente.pedidos)
  cliente: Cliente;
}
