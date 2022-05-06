import { IngredienteOpcional } from "../entity/IngredientesOpcionais";

export default {
  render(pedido_opcional_adicionado: IngredienteOpcional) {
    const {
      id, nome, preco, pedidoRefeicaoId, refeicaoId
    } = pedido_opcional_adicionado;

    return {
      id, nome, preco, pedidoRefeicaoId, refeicaoId
    };
  },

  renderMany(pedido_opcionais_adicionados: IngredienteOpcional[]) {
    return pedido_opcionais_adicionados.map(pedido_opcional_adicionado => this.render(pedido_opcional_adicionado));
  }
};