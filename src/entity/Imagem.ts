import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Refeicao from "./Refeicao";

@Entity('imagem')
export class Imagem {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Refeicao, refeicao => refeicao.imagens)
  @JoinColumn({ name: 'refeicao_id' })
  refeicao: Refeicao;
}