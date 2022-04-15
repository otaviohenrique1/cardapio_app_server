import { Entity, Column, ManyToOne, OneToMany, Generated, PrimaryGeneratedColumn, BaseEntity } from "typeorm";
import { Imagem } from "./Imagem";
import { Ingrediente } from "./Ingrediente";
import { Pedido } from "./Pedido";
import Usuario from "./Usuario";

@Entity('refeicao')
export default class Refeicao extends BaseEntity {
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
  preco: number;

  @Column()
  descricao: string;

  @Column()
  ativo: boolean;

  // @Column()
  // ingredientes: string;

  /* 1 refeicao com 1 ou mais imagens */
  @OneToMany(() => Imagem, imagem => imagem.refeicao, {
    cascade: ['insert', 'update', 'remove']
  })
  imagens: Imagem[];

  /* muitas refeicoes cadastradas por 1 usuario  */
  @ManyToOne(() => Usuario, (usuario) => usuario.refeicoes)
  usuario: Usuario;

  /* 1 refeicao com 1 ou mais ingredientes */
  @OneToMany(() => Ingrediente, ingrediente => ingrediente.refeicao, {
    cascade: ['insert', 'update', 'remove']
  })
  ingredientes: Ingrediente[];
}
