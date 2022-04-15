import Usuario from "../entity/Usuario";

export default {
  render(usuario: Usuario) {
    const {
      id, nome, email, senha, codigo,
      data_cadastro, data_modificacao_cadastro
    } = usuario;
    return {
      id, nome, email, senha, codigo,
      data_cadastro, data_modificacao_cadastro
    };
  },
  renderMany(usuarios: Usuario[]) {
    return usuarios.map(usuario => this.render(usuario));
  }
};