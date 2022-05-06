import { PedidoItem } from "../entity/PedidoItem";

export default {
  render(pedido_item: PedidoItem) {
    const {
      id, refeicaoId, quantidade, pedidoId
    } = pedido_item;

    return {
      id, refeicaoId, quantidade, pedidoId
    };
  },

  renderMany(lista_refeicoes: PedidoItem[]) {
    return lista_refeicoes.map(pedido_item => this.render(pedido_item));
  }
};