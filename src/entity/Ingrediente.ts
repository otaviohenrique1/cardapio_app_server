import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Refeicao from "./Refeicao";

@Entity('ingrediente')
export class Ingrediente extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nome: string;

  @Column()
  quantidade: number;
  
  /* 1 ou mais ingredientes para 1 refeicao */
  @ManyToOne(() => Refeicao, refeicao => refeicao.ingredientes)
  @JoinColumn({ name: 'refeicaoId' })
  refeicao: Refeicao;

  @Column({ type: 'integer', unsigned: true })
  refeicaoId: number;
}
