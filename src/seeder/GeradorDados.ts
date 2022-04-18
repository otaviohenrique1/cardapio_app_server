import { v4 } from "uuid";
import { randomBytes } from "crypto";

/**
 * Gerador dados
 */
export class GeradorDados {
  /**
   * Gera codigo
   * @returns Valor string
   */
  static GeraCodigo() {
    let resultado = v4.toString();
    return resultado;
  }

  /**
   * Gera nome do arquivo com extensao
   * @param nome_arquivo Valor string
   * @param extensao_arquivo Valor string
   * @returns Valor string
   */
  static GeraNomeArquivo(nome_arquivo: string, extensao_arquivo: string) {
    const random_rytes = randomBytes(3).toString('hex');
    const date_now = Date.now();
    const resultado = `${random_rytes}-${date_now}-${nome_arquivo}.${extensao_arquivo}`;
    return resultado;
  }
}