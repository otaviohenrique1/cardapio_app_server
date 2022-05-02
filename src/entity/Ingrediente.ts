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

  /*
  @Column()
  removivel: string; ('Removivel' e 'Não removivel')
  ou
  @Column()
  removivel: boolean;
  */

  /*
  @Column()
  opcional: string; ('Opcional' e 'Não opcional')
  ou
  @Column()
  opcional: boolean;
  */
  
  /* 1 ou mais ingredientes para 1 refeicao */
  @ManyToOne(() => Refeicao, refeicao => refeicao.ingredientes)
  @JoinColumn({ name: 'refeicaoId' })
  refeicao: Refeicao;

  @Column({ type: 'integer', unsigned: true })
  refeicaoId: number;
}
