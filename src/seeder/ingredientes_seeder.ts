import { Ingrediente } from "../entity/Ingrediente";
import { gerador_seeder_insert } from "./gerador_seeder";

function GeradorSeederIngrediente(id: number, nome: string, quantidade: number, refeicao: { id: number }) {
  return { id, nome, quantidade, refeicao };
}

const ingrediente_1 = GeradorSeederIngrediente(1, "Pão", 1, { id: 1 });
const ingrediente_2 = GeradorSeederIngrediente(2, "Queijo", 1, { id: 1 });
const ingrediente_3 = GeradorSeederIngrediente(3, "Carne", 1, { id: 1 });
const ingrediente_4 = GeradorSeederIngrediente(4, "Pão", 1, { id: 2 });
const ingrediente_5 = GeradorSeederIngrediente(5, "Queijo", 1, { id: 2 });
const ingrediente_6 = GeradorSeederIngrediente(6, "Carne", 1, { id: 2 });
const ingrediente_7 = GeradorSeederIngrediente(7, "Pão", 1, { id: 3 });
const ingrediente_8 = GeradorSeederIngrediente(8, "Queijo", 1, { id: 3 });
const ingrediente_9 = GeradorSeederIngrediente(9, "Carne", 1, { id: 3 });
const ingrediente_10 = GeradorSeederIngrediente(10, "Pão", 1, { id: 4 });
const ingrediente_11 = GeradorSeederIngrediente(11, "Queijo", 1, { id: 4 });
const ingrediente_12 = GeradorSeederIngrediente(12, "Carne", 1, { id: 4 });
const ingrediente_13 = GeradorSeederIngrediente(13, "Pão", 1, { id: 5 });
const ingrediente_14 = GeradorSeederIngrediente(14, "Queijo", 1, { id: 5 });
const ingrediente_15 = GeradorSeederIngrediente(15, "Carne", 1, { id: 5 });
const ingrediente_16 = GeradorSeederIngrediente(16, "Pão", 1, { id: 6 });
const ingrediente_17 = GeradorSeederIngrediente(17, "Queijo", 1, { id: 6 });
const ingrediente_18 = GeradorSeederIngrediente(18, "Carne", 1, { id: 6 });
const ingrediente_19 = GeradorSeederIngrediente(19, "Pão", 1, { id: 7 });
const ingrediente_20 = GeradorSeederIngrediente(20, "Queijo", 1, { id: 7 });
const ingrediente_21 = GeradorSeederIngrediente(21, "Carne", 1, { id: 7 });
const ingrediente_22 = GeradorSeederIngrediente(22, "Pão", 1, { id: 8 });
const ingrediente_23 = GeradorSeederIngrediente(23, "Queijo", 1, { id: 8 });
const ingrediente_24 = GeradorSeederIngrediente(24, "Carne", 1, { id: 8 });
const ingrediente_25 = GeradorSeederIngrediente(25, "Pão", 1, { id: 9 });
const ingrediente_26 = GeradorSeederIngrediente(26, "Queijo", 1, { id: 9 });
const ingrediente_27 = GeradorSeederIngrediente(27, "Carne", 1, { id: 9 });

export const ingredientes_seeder = [
  ingrediente_1, ingrediente_2, ingrediente_3, ingrediente_4, ingrediente_5,
  ingrediente_6, ingrediente_7, ingrediente_8, ingrediente_9, ingrediente_10,
  ingrediente_11, ingrediente_12, ingrediente_13, ingrediente_14, ingrediente_15,
  ingrediente_16, ingrediente_17, ingrediente_18, ingrediente_19, ingrediente_20,
  ingrediente_21, ingrediente_22, ingrediente_23, ingrediente_24, ingrediente_25,
  ingrediente_26, ingrediente_27,
];

export const ingredientes_seeder_data = gerador_seeder_insert(Ingrediente, ingredientes_seeder);
