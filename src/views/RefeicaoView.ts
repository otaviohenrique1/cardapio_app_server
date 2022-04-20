import Refeicao from "../entity/Refeicao";
import ImagemView from "./ImagemView";
import IngredienteView from "./IngredienteView";

export default {
  render(refeicao: Refeicao) {
    const {
      id, nome, preco, ingredientes, descricao, ativo, codigo,
      data_cadastro, data_modificacao_cadastro, usuario, imagens
    } = refeicao;
    
    return {
      id, nome, preco,
      ingredientes: IngredienteView.renderMany(ingredientes),
      descricao, ativo, codigo, data_cadastro,
      data_modificacao_cadastro, usuario,
      imagens: ImagemView.renderMany(imagens),
    };
  },
  renderMany(refeicoes: Refeicao[]) {
    return refeicoes.map(refeicao => this.render(refeicao));
  }
};