import Refeicao from "../entity/Refeicao";
import ImagemView from "./ImagemView";
import IngredienteView from "./IngredienteView";

export default {
  render(refeicao: Refeicao) {
    const {
      id, nome, preco, ingredientes, descricao, ativo, codigo,
      data_cadastro, data_modificacao_cadastro, usuario, imagens
    } = refeicao;

    const lista_ingredientes = IngredienteView
      .renderMany(ingredientes);

    const lista_imagens = ImagemView
      .renderMany(imagens);

    return {
      id, nome, preco,
      ingredientes: lista_ingredientes,
      descricao, ativo, codigo, data_cadastro,
      data_modificacao_cadastro, usuario,
      imagens: lista_imagens,
    };
  },
  renderMany(refeicoes: Refeicao[]) {
    return refeicoes.map(refeicao => this.render(refeicao));
  }
};