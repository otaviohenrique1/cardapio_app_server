import { BaseEntity, Column, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";

@Entity('administrador')
export class Administrador extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  @Generated('uuid')
  codigo: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  data_cadastro: Date;

  @Column()
  data_modificacao_cadastro: Date;
}
