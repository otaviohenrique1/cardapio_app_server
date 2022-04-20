import { Ingrediente } from "../entity/Ingrediente";

export default {
  render(ingrediente: Ingrediente) {
    const {
      id, nome, quantidade, refeicaoId
    } = ingrediente;

    return {
      id, nome, quantidade, refeicaoId
    };
  },

  renderMany(ingredientes: Ingrediente[]) {
    return ingredientes.map(ingrediente => this.render(ingrediente));
  }
};