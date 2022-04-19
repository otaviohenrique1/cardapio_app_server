export function GeradorSeederUsuario(
  id: number, nome: string, codigo: string, email: string,
  senha: string, data_cadastro: Date, data_modificacao_cadastro: Date
) {
  return {
    id, nome, codigo, email, senha,
    data_cadastro, data_modificacao_cadastro
  };
}

export function GeradorSeederRefeicao(
  id: number, nome: string, codigo: string, ativo: boolean, preco: number, descricao: string,
  data_cadastro: Date, data_modificacao_cadastro: Date, usuarioId: { id: number }
) {
  return {
    id, nome, codigo, ativo, preco, descricao,
    data_cadastro, data_modificacao_cadastro, usuarioId
  };
}

export function GeradorSeederPedido(
  id: number, clienteId: { id: number }, codigo: string, status_pedido: string,
  preco_total: number, data_cadastro: Date, data_modificacao_cadastro: Date
) {
  return {
    id, clienteId, codigo, status_pedido,
    preco_total, data_cadastro, data_modificacao_cadastro
  };
}

export function GeradorSeederPedidoRefeicao(
  id: number, refeicaoId: { id: number },
  quantidade: number, pedidoId: { id: number }
) {
  return {
    id, refeicaoId, quantidade, pedidoId
  };
}

export function GeradorSeederIngrediente(
  id: number, nome: string, quantidade: number, refeicao: { id: number }
) {
  return {
    id, nome, quantidade, refeicao
  };
}

export function GeradorSeederImagem(
  id: number, path: string, refeicaoId: { id: number }
) {
  return {
    id, path, refeicaoId
  };
}

export function GeradorSeederEmpresa(
  id: number, nome: string, email: string, senha: string, status_cadastro: boolean,
  codigo: string, data_cadastro: Date, data_modificacao_cadastro: Date
) {
  return {
    id, nome, email, senha, status_cadastro, codigo,
    data_cadastro, data_modificacao_cadastro
  };
}

export function GeradorSeederCliente(
  id: number, nome: string, codigo: string, rua: string, numero: string,
  bairro: string, cidade: string, estado: string, cep: string, email: string,
  senha: string, telefone: string, data_cadastro: Date, data_modificacao_cadastro: Date
) {
  return {
    id, nome, codigo, email, senha,
    telefone, rua, numero, bairro, cidade, estado, cep,
    data_cadastro, data_modificacao_cadastro
  };
}

export function GeradorSeederAdministrador(
  id: number, nome: string, codigo: string, email: string,
  senha: string, data_cadastro: Date, data_modificacao_cadastro: Date
) {
  return {
    id, nome, codigo, email, senha,
    data_cadastro, data_modificacao_cadastro
  };
}
