import { Empresa } from "../entity/Empresa";

export default {
  render(empresa: Empresa) {
    return {
      id: empresa.id,
      nome: empresa.nome,
      email: empresa.email,
      senha: empresa.senha,
      codigo: empresa.codigo,
      status_cadastro: empresa.status_cadastro,
      data_cadastro: empresa.data_cadastro,
      data_modificacao_cadastro: empresa.data_modificacao_cadastro,
    };
  },
  renderMany(empresas: Empresa[]) {
    return empresas.map(empresa => this.render(empresa));
  }
};