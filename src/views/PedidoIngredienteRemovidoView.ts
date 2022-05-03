import { PedidoIngredienteRemovido } from "../entity/PedidoIngredienteRemovido";

export default {
  render(pedido_ingrediente_removido: PedidoIngredienteRemovido) {
    const {
      id, nome
    } = pedido_ingrediente_removido;

    return {
      id, nome
    };
  },

  renderMany(pedido_ingredientes_removidos: PedidoIngredienteRemovido[]) {
    return pedido_ingredientes_removidos.map(pedido_ingrediente_removido => this.render(pedido_ingrediente_removido));
  }
};