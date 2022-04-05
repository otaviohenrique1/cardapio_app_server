import {BaseEntity, Column, Entity, Generated, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Pedido } from "./Pedido";

@Entity()
export class Cliente extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  @Generated('uuid')
  codigo: string;
  
  @Column()
  data_cadastro: Date;

  @Column()
  data_modificacao_cadastro: Date;

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
  telefone: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @OneToMany(() => Pedido, pedido => pedido.cliente)
  pedidos: Pedido[];
}
