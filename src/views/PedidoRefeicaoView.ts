import { PedidoRefeicao } from "../entity/PedidoRefeicao";

export default {
  render(pedido: PedidoRefeicao) {
    const {
      id, nome, preco, quantidade
    } = pedido;

    return {
      id, nome, preco, quantidade
    };
  },

  renderMany(pedido_refeicoes: PedidoRefeicao[]) {
    return pedido_refeicoes.map(pedido_refeicao => this.render(pedido_refeicao));
  }
};