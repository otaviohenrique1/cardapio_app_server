import { v4 } from "uuid";
import { randomBytes } from "crypto";

/**
 * Gera codigo usando uuid.v4
 * @returns Valor string
 * @example
 *  console.log(gera_codigo_uuid_v4());
 *  Imprime => 06e7a615-5ced-417c-a8c0-faca8c78b7c2
 */
export function gera_codigo_uuid_v4() {
  const resultado = v4().toString();
  return resultado;
}

/**
 * Gera nome arquivo de imagem
 * @param nome_arquivo Valor string
 * @param extensao_arquivo Valor string
 * @returns Valor string
 * @example
 *  console.log(gera_nome_arquivo('a1', 'jpg'));
 *  Imprime => dcdbc3-1649976852679-a1.jpg
 */
export function gera_nome_arquivo(nome_arquivo: string, extensao_arquivo: string) {
  let date = Date.now();
  let random_bytes = randomBytes(3).toString('hex')
  const resultado = `${random_bytes}-${date}-${nome_arquivo}.${extensao_arquivo}`;
  return resultado;
}