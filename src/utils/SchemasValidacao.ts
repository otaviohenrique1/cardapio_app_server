import { GeradorMensagem } from "./GeradorMensagem";
import * as Yup from "yup";
import { EMAIL_INVALIDO, valor_minimo_carateres, MINIMO_CARACTERES, valor_maximo_carateres, MAXIMO_CARACTERES } from "./constantes";

/* Schemas de validacao */
export const valida_id = Yup
  .number()
  .required(GeradorMensagem.GeraMensagemSimples('Campo vazio'));

export const valida_nome = Yup
  .string()
  .required(GeradorMensagem.GeraMensagemErro('nome'));

export const valida_email = Yup
  .string()
  .email(EMAIL_INVALIDO)
  .required(GeradorMensagem.GeraMensagemErro('email'));

export const valida_senha = Yup
  .string()
  .min(valor_minimo_carateres, MINIMO_CARACTERES)
  .max(valor_maximo_carateres, MAXIMO_CARACTERES)
  .required(GeradorMensagem.GeraMensagemErro('senha'));

export const valida_data_cadastro = Yup
  .date()
  .required(GeradorMensagem.GeraMensagemErro('data_cadastro'));

export const valida_data_modificacao_cadastro = Yup
  .date()
  .required(GeradorMensagem.GeraMensagemErro('data_modificacao_cadastro'));

export const valida_rua = Yup
  .string()
  .required(GeradorMensagem.GeraMensagemErro('rua'));

export const valida_numero = Yup
  .string()
  .required(GeradorMensagem.GeraMensagemErro('numero'));

export const valida_bairro = Yup
  .string()
  .required(GeradorMensagem.GeraMensagemErro('bairro'));

export const valida_cidade = Yup
  .string()
  .required(GeradorMensagem.GeraMensagemErro('cidade'));

export const valida_estado = Yup
  .string()
  .required(GeradorMensagem.GeraMensagemErro('estado'));

export const valida_cep = Yup
  .string()
  .required(GeradorMensagem.GeraMensagemErro('cep'));

export const valida_telefone = Yup
  .string()
  .required(GeradorMensagem.GeraMensagemErro('telefone'));

export const valida_status_cadastro = Yup
  .boolean()
  .required(GeradorMensagem.GeraMensagemErro('status_cadastro'));

export const valida_status_pedido = Yup
  .string()
  .required(GeradorMensagem.GeraMensagemErro('status_pedido'));

export const valida_preco = Yup
  .number()
  .required(GeradorMensagem.GeraMensagemErro('preco'));

export const valida_preco_total = Yup
  .number()
  .required(GeradorMensagem.GeraMensagemErro('preco_total'));

export const valida_ingredientes = Yup
  .string()
  .required(GeradorMensagem.GeraMensagemErro('ingredientes'));

export const valida_descricao = Yup
  .string()
  .required(GeradorMensagem.GeraMensagemErro('descricao'));

export const valida_ativo = Yup
  .boolean()
  .required(GeradorMensagem.GeraMensagemErro('ativo'));

export const valida_quantidade = Yup
  .number()
  .required(GeradorMensagem.GeraMensagemErro('quantidade'));

export const valida_path = Yup
  .string()
  .required(GeradorMensagem.GeraMensagemErro('path'));

export const valida_imagens = Yup.array(
  Yup
    .object()
    .shape({
      path: valida_path
    })
);

export const valida_lista_ingredientes = Yup.array(
  Yup
    .object()
    .shape({
      nome: valida_nome,
      quantidade: valida_quantidade
    })
);

export const valida_lista_refeicoes = Yup.array(
  Yup
    .object()
    .shape({
      refeicaoId: valida_id,
      quantidade: valida_quantidade
    })
);
