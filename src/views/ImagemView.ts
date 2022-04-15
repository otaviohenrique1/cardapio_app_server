import { PORT } from "../utils/constantes";
import { Imagem } from "../entity/Imagem";


export default {
  render(imagem: Imagem) {
    const {
      id, path
    } = imagem;

    const url = `http://192.168.0.12:${PORT}/uploads/fotos/${path}`;

    return {
      id, url
    };
    // url: `http://192.168.0.12:3333/uploads/fotos/${imagem_path}`,
    // url: `http://localhost:3333/uploads/${image.path}`,
  },

  renderMany(imagens: Imagem[]) {
    return imagens.map(imagem => this.render(imagem));
  }
};