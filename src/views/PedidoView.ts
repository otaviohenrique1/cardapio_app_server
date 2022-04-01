import { Pedido } from "../entity/Pedido";

export default {
  render(pedido: Pedido) {
    return {
      id: pedido.id,
      codigo: pedido.codigo,
      cliente_nome: pedido.cliente_nome,
      cliente_endereco: pedido.cliente_endereco,
      lista_refeicoes: pedido.lista_refeicoes,
      status_pedido: pedido.status_pedido,
      data_cadastro: pedido.data_cadastro,
      data_modificacao_cadastro: pedido.data_modificacao_cadastro,
    };
  },

  renderMany(pedidos: Pedido[]) {
    return pedidos.map(pedido => this.render(pedido));
  }
};