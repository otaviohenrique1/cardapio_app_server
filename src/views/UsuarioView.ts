import Usuario from "../entity/Usuario";

export default {
  render(usuario: Usuario) {
    return {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      senha: usuario.senha,
      codigo: usuario.codigo,
      data_cadastro: usuario.data_cadastro,
      data_modificacao_cadastro: usuario.data_modificacao_cadastro,
    };
  },
  renderMany(usuarios: Usuario[]) {
    return usuarios.map(usuario => this.render(usuario));
  }
};