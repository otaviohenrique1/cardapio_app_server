import { Administrador } from "../entity/Administrador";

export default {
  render(administrador: Administrador) {
    return {
      id: administrador.id,
      nome: administrador.nome,
      email: administrador.email,
      senha: administrador.senha,
      codigo: administrador.codigo,
      data_cadastro: administrador.data_cadastro,
      data_modificacao_cadastro: administrador.data_modificacao_cadastro
    };
  },
  renderMany(administradores: Administrador[]) {
    return administradores.map(administrador => this.render(administrador));
  }
};