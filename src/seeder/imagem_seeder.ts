import { Imagem } from "../entity/Imagem";
import { GeradorDados } from "./GeradorDados";
import { gerador_seeder_insert } from "./gerador_seeder";

function GeradorSeederImagem(id: number, path: string, refeicaoId: { id: number }) {
  return { id, path, refeicaoId };
}

export const imagem_1_refeicao_1 = GeradorSeederImagem(
  1, GeradorDados.GeraNomeArquivo('a1', 'jpg'), { id: 1 }
);
export const imagem_2_refeicao_1 = GeradorSeederImagem(
  2, GeradorDados.GeraNomeArquivo('a1', 'jpg'), { id: 1 }
);
export const imagem_3_refeicao_1 = GeradorSeederImagem(
  3, GeradorDados.GeraNomeArquivo('a1', 'jpg'), { id: 1 }
);

export const imagem_4_refeicao_2 = GeradorSeederImagem(
  4, GeradorDados.GeraNomeArquivo('a1', 'jpg'), { id: 2 }
);
export const imagem_5_refeicao_2 = GeradorSeederImagem(
  5, GeradorDados.GeraNomeArquivo('a1', 'jpg'), { id: 2 }
);
export const imagem_6_refeicao_2 = GeradorSeederImagem(
  6, GeradorDados.GeraNomeArquivo('a1', 'jpg'), { id: 2 }
);

export const imagem_7_refeicao_3 = GeradorSeederImagem(
  7, GeradorDados.GeraNomeArquivo('a1', 'jpg'), { id: 3 }
);
export const imagem_8_refeicao_3 = GeradorSeederImagem(
  8, GeradorDados.GeraNomeArquivo('a1', 'jpg'), { id: 3 }
);
export const imagem_9_refeicao_3 = GeradorSeederImagem(
  9, GeradorDados.GeraNomeArquivo('a1', 'jpg'), { id: 3 }
);

export const imagem_10_refeicao_4 = GeradorSeederImagem(
  10, GeradorDados.GeraNomeArquivo('a1', 'jpg'), { id: 4 }
);
export const imagem_11_refeicao_4 = GeradorSeederImagem(
  11, GeradorDados.GeraNomeArquivo('a1', 'jpg'), { id: 4 }
);
export const imagem_12_refeicao_4 = GeradorSeederImagem(
  12, GeradorDados.GeraNomeArquivo('a1', 'jpg'), { id: 4 }
);

export const imagem_13_refeicao_5 = GeradorSeederImagem(
  13, GeradorDados.GeraNomeArquivo('a1', 'jpg'), { id: 5 }
);
export const imagem_14_refeicao_5 = GeradorSeederImagem(
  14, GeradorDados.GeraNomeArquivo('a1', 'jpg'), { id: 5 }
);
export const imagem_15_refeicao_5 = GeradorSeederImagem(
  15, GeradorDados.GeraNomeArquivo('a1', 'jpg'), { id: 5 }
);

export const imagem_16_refeicao_6 = GeradorSeederImagem(
  16, GeradorDados.GeraNomeArquivo('a1', 'jpg'), { id: 6 }
);
export const imagem_17_refeicao_6 = GeradorSeederImagem(
  17, GeradorDados.GeraNomeArquivo('a1', 'jpg'), { id: 6 }
);
export const imagem_18_refeicao_6 = GeradorSeederImagem(
  18, GeradorDados.GeraNomeArquivo('a1', 'jpg'), { id: 6 }
);

export const imagem_19_refeicao_7 = GeradorSeederImagem(
  19, GeradorDados.GeraNomeArquivo('a1', 'jpg'), { id: 7 }
);
export const imagem_20_refeicao_7 = GeradorSeederImagem(
  20, GeradorDados.GeraNomeArquivo('a1', 'jpg'), { id: 7 }
);
export const imagem_21_refeicao_7 = GeradorSeederImagem(
  21, GeradorDados.GeraNomeArquivo('a1', 'jpg'), { id: 7 }
);

export const imagem_22_refeicao_8 = GeradorSeederImagem(
  22, GeradorDados.GeraNomeArquivo('a1', 'jpg'), { id: 8 }
);
export const imagem_23_refeicao_8 = GeradorSeederImagem(
  23, GeradorDados.GeraNomeArquivo('a1', 'jpg'), { id: 8 }
);
export const imagem_24_refeicao_8 = GeradorSeederImagem(
  24, GeradorDados.GeraNomeArquivo('a1', 'jpg'), { id: 8 }
);

export const imagem_25_refeicao_9 = GeradorSeederImagem(
  25, GeradorDados.GeraNomeArquivo('a1', 'jpg'), { id: 9 }
);
export const imagem_26_refeicao_9 = GeradorSeederImagem(
  26, GeradorDados.GeraNomeArquivo('a1', 'jpg'), { id: 9 }
);
export const imagem_27_refeicao_9 = GeradorSeederImagem(
  27, GeradorDados.GeraNomeArquivo('a1', 'jpg'), { id: 9 }
);

export const imagem_seeder = [
  imagem_1_refeicao_1, imagem_2_refeicao_1, imagem_3_refeicao_1, imagem_4_refeicao_2,
  imagem_5_refeicao_2, imagem_6_refeicao_2, imagem_7_refeicao_3, imagem_8_refeicao_3,
  imagem_9_refeicao_3, imagem_10_refeicao_4, imagem_11_refeicao_4, imagem_12_refeicao_4,
  imagem_13_refeicao_5, imagem_14_refeicao_5, imagem_15_refeicao_5, imagem_16_refeicao_6,
  imagem_17_refeicao_6, imagem_18_refeicao_6, imagem_19_refeicao_7, imagem_20_refeicao_7,
  imagem_21_refeicao_7, imagem_22_refeicao_8, imagem_23_refeicao_8, imagem_24_refeicao_8,
  imagem_25_refeicao_9, imagem_26_refeicao_9, imagem_27_refeicao_9
];

export const cliente_seeder_data = gerador_seeder_insert(Imagem, imagem_seeder);
