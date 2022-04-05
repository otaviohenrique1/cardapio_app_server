import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Refeicao from "./Refeicao";

@Entity('imagem')
export class Imagem extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Refeicao, refeicao => refeicao.imagens)
  refeicao: Refeicao;
}