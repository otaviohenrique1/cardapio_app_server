import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Refeicao from "./Refeicao";

@Entity('imagem')
export class Imagem extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Refeicao, refeicao => refeicao.imagens)
  @JoinColumn({ name: 'refeicaoId' })
  refeicao: Refeicao;

  @Column({ type: 'integer', unsigned: true })
  refeicaoId: number;
}