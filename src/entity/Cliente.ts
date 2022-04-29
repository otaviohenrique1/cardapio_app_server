import {BaseEntity, Column, Entity, Generated, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Pedido } from "./Pedido";

@Entity('cliente')
export class Cliente extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated('uuid')
  codigo: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  telefone: string;

  @Column()
  rua: string;

  @Column()
  numero: string;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  cep: string;

  @Column()
  data_cadastro: Date;

  @Column()
  data_modificacao_cadastro: Date;

  /* 1 ou mais pedidos para 1 cliente */
  @OneToMany(() => Pedido, pedido => pedido.cliente)
  pedidos: Pedido[];
}
