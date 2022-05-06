import { IngredienteRemovido } from "../entity/IngredientesRemovidos";

export default {
  render(pedido_ingrediente_removido: IngredienteRemovido) {
    const {
      id, nome
    } = pedido_ingrediente_removido;

    return {
      id, nome
    };
  },

  renderMany(pedido_ingredientes_removidos: IngredienteRemovido[]) {
    return pedido_ingredientes_removidos.map(pedido_ingrediente_removido => this.render(pedido_ingrediente_removido));
  }
};