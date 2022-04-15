import { Ingrediente } from "../entity/Ingrediente";
import { gerador_seeder_insert } from "./gerador_seeder";

const ingrediente_1 = { id: 1, nome: "Pão", quantidade: 1, refeicao: { id: 1 } };
const ingrediente_2 = { id: 2, nome: "Queijo", quantidade: 1, refeicao: { id: 1 } };
const ingrediente_3 = { id: 3, nome: "Carne", quantidade: 1, refeicao: { id: 1 } };
const ingrediente_4 = { id: 4, nome: "Pão", quantidade: 1, refeicao: { id: 2 } };
const ingrediente_5 = { id: 5, nome: "Queijo", quantidade: 1, refeicao: { id: 2 } };
const ingrediente_6 = { id: 6, nome: "Carne", quantidade: 1, refeicao: { id: 2 } };
const ingrediente_7 = { id: 7, nome: "Pão", quantidade: 1, refeicao: { id: 3 } };
const ingrediente_8 = { id: 8, nome: "Queijo", quantidade: 1, refeicao: { id: 3 } };
const ingrediente_9 = { id: 9, nome: "Carne", quantidade: 1, refeicao: { id: 3 } };
const ingrediente_10 = { id: 10, nome: "Pão", quantidade: 1, refeicao: { id: 4 } };
const ingrediente_11 = { id: 11, nome: "Queijo", quantidade: 1, refeicao: { id: 4 } };
const ingrediente_12 = { id: 12, nome: "Carne", quantidade: 1, refeicao: { id: 4 } };
const ingrediente_13 = { id: 13, nome: "Pão", quantidade: 1, refeicao: { id: 5 } };
const ingrediente_14 = { id: 14, nome: "Queijo", quantidade: 1, refeicao: { id: 5 } };
const ingrediente_15 = { id: 15, nome: "Carne", quantidade: 1, refeicao: { id: 5 } };
const ingrediente_16 = { id: 16, nome: "Pão", quantidade: 1, refeicao: { id: 6 } };
const ingrediente_17 = { id: 17, nome: "Queijo", quantidade: 1, refeicao: { id: 6 } };
const ingrediente_18 = { id: 18, nome: "Carne", quantidade: 1, refeicao: { id: 6 } };
const ingrediente_19 = { id: 19, nome: "Pão", quantidade: 1, refeicao: { id: 7 } };
const ingrediente_20 = { id: 20, nome: "Queijo", quantidade: 1, refeicao: { id: 7 } };
const ingrediente_21 = { id: 21, nome: "Carne", quantidade: 1, refeicao: { id: 7 } };
const ingrediente_22 = { id: 22, nome: "Pão", quantidade: 1, refeicao: { id: 8 } };
const ingrediente_23 = { id: 23, nome: "Queijo", quantidade: 1, refeicao: { id: 8 } };
const ingrediente_24 = { id: 24, nome: "Carne", quantidade: 1, refeicao: { id: 8 } };
const ingrediente_25 = { id: 25, nome: "Pão", quantidade: 1, refeicao: { id: 9 } };
const ingrediente_26 = { id: 26, nome: "Queijo", quantidade: 1, refeicao: { id: 9 } };
const ingrediente_27 = { id: 27, nome: "Carne", quantidade: 1, refeicao: { id: 9 } };

export const ingredientes_seeder = [
  ingrediente_1, ingrediente_2, ingrediente_3, ingrediente_4, ingrediente_5,
  ingrediente_6, ingrediente_7, ingrediente_8, ingrediente_9, ingrediente_10,
  ingrediente_11, ingrediente_12, ingrediente_13, ingrediente_14, ingrediente_15,
  ingrediente_16, ingrediente_17, ingrediente_18, ingrediente_19, ingrediente_20,
  ingrediente_21, ingrediente_22, ingrediente_23, ingrediente_24, ingrediente_25,
  ingrediente_26, ingrediente_27,
];

export const ingredientes_seeder_data = gerador_seeder_insert(Ingrediente, ingredientes_seeder);
