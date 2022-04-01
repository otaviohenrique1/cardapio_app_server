import { Entity, Column, ManyToOne, OneToMany } from "typeorm";
import { DadosBase } from "./DadosBase";
import { Imagem } from "./Imagem";
import Usuario from "./Usuario";

@Entity('refeicao')
export default class Refeicao extends DadosBase {
  @Column()
  preco: number;

  @Column()
  ingredientes: string;

  @Column()
  descricao: string;

  @Column()
  ativo: boolean;

  @OneToMany(() => Imagem, imagem => imagem.refeicao, {
    cascade: ['insert', 'update']
  })
  imagens: Imagem[];

  @ManyToOne(() => Usuario, (usuario) => usuario.refeicoes)
  usuario: Usuario;
}

/*
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import Usuario from "./Usuario";

@Entity('refeicao')
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
  codigo: string;
  
  @Column()
  data_cadastro: Date;

  @Column()
  data_modificacao_cadastro: Date;

  @ManyToOne(() => Usuario, (usuario) => usuario.refeicoes)
  @JoinColumn({ name: 'refeicoes' })
  id_usuario: number;
}
*/