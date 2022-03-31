import { Imagem } from "../entity/Imagem";

export default {
  render(imagem: Imagem) {
    const usuario_codigo = imagem.refeicao.usuario.codigo;
    const usuario_id = imagem.refeicao.usuario.id;
    const imagem_path = imagem.path;
    return {
      id: imagem.id,
      url: `http://192.168.0.12:3333/uploads/fotos/${usuario_id}_${usuario_codigo}/${imagem_path}`,
    };
    // url: `http://localhost:3333/uploads/${image.path}`,
  },

  renderMany(imagens: Imagem[]) {
    return imagens.map(imagem => this.render(imagem));
  }
};