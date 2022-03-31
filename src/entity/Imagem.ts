import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Refeicao from "./Refeicao";

@Entity('imagem')
export class Imagem {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Refeicao, refeicao => refeicao.imagens)
  refeicao: Refeicao;
}