import { Ingrediente } from "../entity/Ingrediente";

export default {
  render(ingrediente: Ingrediente) {
    const {
      id, nome, quantidade, unidade_quantidade, refeicaoId, removivel
    } = ingrediente;

    return {
      id, nome, quantidade, unidade_quantidade, refeicaoId, removivel
    };
  },

  renderMany(ingredientes: Ingrediente[]) {
    return ingredientes.map(ingrediente => this.render(ingrediente));
  }
};