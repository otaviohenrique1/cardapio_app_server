import { Entity, Column, ManyToOne, OneToMany, Generated, PrimaryGeneratedColumn, BaseEntity, OneToOne, JoinColumn } from "typeorm";
import { Imagem } from "./Imagem";
import { Ingrediente } from "./Ingrediente";
import { PedidoOpcionalAdicionado } from "./PedidoOpcionalAdicionado";
import { PedidoRefeicao } from "./PedidoRefeicao";
import Empresa from "./Empresa";

/* Ver se vai mudar o nome de 'Refeicao' para 'Produto' */
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

  /* ativo => status_produto ou situacao_produto */
  @Column()
  ativo: boolean; // 'ativo' => true, 'inativo' => false
  // ativo: string; // ('ativo', 'inativo', 'rejeitado', 'testes'), caso seja do tipo string

  @Column()
  quantidade: number;

  @Column()
  unidade_quantidade: string; // unidade, ml, l, mg, g, kg

  @Column()
  tipo_produto: string; // ('comida' e 'bebida')

  /* 1 refeicao com 1 ou mais imagens */
  @OneToMany(() => Imagem, imagem => imagem.refeicao, {
    cascade: ['insert', 'update', 'remove']
  })
  imagens: Imagem[];

  /* muitas refeicoes cadastradas por 1 usuario  */
  @ManyToOne(() => Empresa, (empresa) => empresa.refeicoes)
  @JoinColumn({ name: 'empresaId' })
  empresa: Empresa;

  @Column({ type: 'integer', unsigned: true })
  empresaId: number;

  /* 1 refeicao com 1 ou mais ingredientes */
  /* Ver se vai ser opcional */
  @OneToMany(() => Ingrediente, ingrediente => ingrediente.refeicao, {
    cascade: ['insert', 'update', 'remove']
  })
  ingredientes: Ingrediente[];

  /* Arrumar */
  /* Ver se vai renomear de 'PedidoRefeicao' para 'PedidoItem' ou 'PedidoProduto' */
  @OneToOne(() => PedidoRefeicao, (pedido_refeicao) => pedido_refeicao.refeicao)
  pedido_refeicao: PedidoRefeicao;
  
  /* 1 refeicao do pedido pode ter nenhum ou 1 ou mais opcionais */
  /* Ver se vai ser opcional */
  /* Ver se vai ser cadastrado no cadastro da refeicao */
  @OneToMany(() => PedidoOpcionalAdicionado, opcional => opcional.pedido_refeicao, {
    cascade: ['insert']
  })
  lista_opcionais: PedidoOpcionalAdicionado[];
}
