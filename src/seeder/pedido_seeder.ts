import { Pedido } from "../entity/Pedido";
import { GeradorDados } from "./GeradorDados";
import { gerador_seeder_insert } from "./gerador_seeder";

function GeradorSeederPedido(
  id: number, codigo: string, data_cadastro: string,
  data_modificacao_cadastro: string, clienteId: { id: number },
  status_pedido: string, preco_pedido: number
) {
  return {
    id, codigo, data_cadastro, data_modificacao_cadastro, clienteId,
    status_pedido, preco_pedido
  };
}

export const pedido_1 = GeradorSeederPedido(
  1, GeradorDados.GeraCodigo(),
  '2022-12-04 20:02:00', '2022-12-04 21:03:00',
  { id: 1 }, "Entregue", 57,
);

export const pedido_seeder = [
  pedido_1
];

export const cliente_seeder_data = gerador_seeder_insert(Pedido, pedido_seeder);
