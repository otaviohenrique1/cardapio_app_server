import { Cliente } from "../entity/Cliente";

export default {
  render(cliente: Cliente) {
    return {
      id: cliente.id,
      codigo: cliente.codigo,
      nome: cliente.nome,
      rua: cliente.rua,
      numero: cliente.numero,
      bairro: cliente.bairro,
      cidade: cliente.cidade,
      estado: cliente.estado,
      email: cliente.email,
      senha: cliente.senha,
      cep: cliente.cep,
      pedidos: cliente.pedidos,
      telefone: cliente.telefone,
      data_cadastro: cliente.data_cadastro,
      data_modificacao_cadastro: cliente.data_modificacao_cadastro,
    };
  },

  renderMany(cliente: Cliente[]) {
    return cliente.map(cliente => this.render(cliente));
  }
};