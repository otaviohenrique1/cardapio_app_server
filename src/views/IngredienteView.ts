import { Ingrediente } from "../entity/Ingrediente";

export default {
  render(ingrediente: Ingrediente) {
    const {
      id, nome, quantidade
    } = ingrediente;

    return {
      id, nome, quantidade
    };
  },

  renderMany(ingredientes: Ingrediente[]) {
    return ingredientes.map(ingrediente => this.render(ingrediente));
  }
};