import Refeicao from "../entity/Refeicao";
import ImagemView from "./ImagemView";

export default {
  render(refeicao: Refeicao) {
    return {
      id: refeicao.id,
      nome: refeicao.nome,
      preco: refeicao.preco,
      ingredientes: refeicao.ingredientes,
      ativo: refeicao.ativo,
      codigo: refeicao.codigo,
      data_cadastro: refeicao.data_cadastro,
      data_modificacao_cadastro: refeicao.data_modificacao_cadastro,
      id_usuario: refeicao.id_usuario,
      images: ImagemView.renderMany(refeicao.imagens),
    };
  },
  renderMany(refeicoes: Refeicao[]) {
    return refeicoes.map(refeicao => this.render(refeicao));
  }
};