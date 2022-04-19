import { PedidoRefeicao } from "../entity/PedidoRefeicao";

export default {
  render(pedido_refeicao: PedidoRefeicao) {
    const {
      id, refeicaoId, quantidade, pedidoId
    } = pedido_refeicao;

    return {
      id, refeicaoId, quantidade, pedidoId
    };
  },

  renderMany(pedido_refeicoes: PedidoRefeicao[]) {
    return pedido_refeicoes.map(pedido_refeicao => this.render(pedido_refeicao));
  }
};