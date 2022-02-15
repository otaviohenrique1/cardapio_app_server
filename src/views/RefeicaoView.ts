import Refeicao from "../entity/Refeicao";

export default {
  render(refeicao: Refeicao) {
    return {
      id: refeicao.id,
      nome: refeicao.nome,
      preco: refeicao.preco,
      ingredientes: refeicao.ingredientes,
      ativo: refeicao.ativo,
      data_cadastro: refeicao.data_cadastro,
      id_usuario: refeicao.id_usuario,
    };
  }
};