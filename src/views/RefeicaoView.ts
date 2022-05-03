import Refeicao from "../entity/Refeicao";
import ImagemView from "./ImagemView";
import IngredienteView from "./IngredienteView";

export default {
  render(refeicao: Refeicao) {
    const {
      id, nome, preco, ingredientes, imagens, descricao, ativo, codigo,
      data_cadastro, data_modificacao_cadastro, empresa, quantidade,
      unidade_quantidade, tipo_produto
    } = refeicao;
    
    return {
      id, nome, preco,
      ingredientes: IngredienteView.renderMany(ingredientes),
      imagens: ImagemView.renderMany(imagens), descricao, ativo,
      codigo, data_cadastro, data_modificacao_cadastro, empresa,
      quantidade, unidade_quantidade, tipo_produto
    };
  },
  renderMany(refeicoes: Refeicao[]) {
    return refeicoes.map(refeicao => this.render(refeicao));
  }
};