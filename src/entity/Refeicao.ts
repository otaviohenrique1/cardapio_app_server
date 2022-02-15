import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Refeicao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  preco: number;

  @Column()
  ingredientes: string;

  @Column()
  ativo: boolean;

  @Column()
  data_cadastro: Date;

  // Colocar como chave estangeira
  @Column()
  id_usuario: number;
}