import { v4 } from "uuid";
import { randomBytes } from "crypto";
import { format } from "date-fns";
import { EntityTarget, getConnection } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

export const FORMATO_DATA_COM_HORA = 'yyyy-MM-dd HH:mm:ss';

type DataHoraFormatos =
  "HH:mm" |
  "HH:mm:ss" |
  "dd/MM/yyyy" |
  "yyyy-MM-dd" |
  "yyyy-MM-dd HH:mm" |
  "dd/MM/yyyy HH:mm" |
  "yyyy-MM-dd HH:mm:ss" |
  "dd/MM/yyyy HH:mm:ss";

/**
 * Gerador dados
 */
export class GeradorDados {
  /**
   * Gera codigo usando uuid.v4
   * @returns Valor string
   * @example
   *  console.log(gera_codigo_uuid_v4());
   *  Imprime => 06e7a615-5ced-417c-a8c0-faca8c78b7c2
   */
  static GeraCodigo() {
    let resultado = v4.toString();
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
  static GeraNomeArquivo(nome_arquivo: string, extensao_arquivo: string) {
    const random_rytes = randomBytes(3).toString('hex');
    const date_now = Date.now();
    const resultado = `${random_rytes}-${date_now}-${nome_arquivo}.${extensao_arquivo}`;
    return resultado;
  }

  /**
   * Gera data formatada
   * Pega o valor da data atual e retorna um valor
   * formata usando um formato que fica na lista DataHoraFormatos.
   * @param formato Valor do tipo DataHoraFormatos
   * @return Valor do tipo string formatado
   * @example
   *  let data = new Date();
   *  let resultado = FormatadorDados.GeradorDataHoraFormata('dd/MM/yyyy');
   *  console.log(data); // Imprime => Tue Apr 12 2022 14:34:14 GMT-0300
   *  console.log(resultado); // Imprime => 12/04/2022
   */
  static GeradorDataHoraFormatada(formato: DataHoraFormatos) {
    let resultado = format(new Date(), formato);
    return resultado;
  }

  /* Seeder - Retirar quando for para producao */
  /**
   * Insere os dados na tabela
   * @param entityTarget Specifies INTO which entity's table insertion will be executed.
   * @param values Values needs to be inserted into table.
   * @returns Promise<InsertResult>
   */
  static GeradorSeederInsert<Entity>(
    entityTarget: EntityTarget<Entity>,
    values: QueryDeepPartialEntity<Entity> | QueryDeepPartialEntity<Entity>[]
  ) {
    const resultado = getConnection()
      .createQueryBuilder()
      .insert()
      .into(entityTarget)
      .values(values)
      .execute();

    return resultado;
  }
}