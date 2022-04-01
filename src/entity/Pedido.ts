import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { DadosBase } from "./DadosBase";
import Refeicao from "./Refeicao";

@Entity('pedido')
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status_pedido: string;
  
  @Column()
  lista_refeicoes: string;
  
  @Column()
  cliente_nome: string;
  
  @Column()
  cliente_endereco: string;
  
  @Column()
  cliente_telefone: string;

  @Column()
  preco_pedido: number;
  
  @Column()
  codigo: string;

  @Column()
  data_cadastro: Date;

  @Column()
  data_modificacao_cadastro: Date;
}
