import { CentrodeCusto } from "./centrodecusto.model";

export interface titulo {
  id: number,
  descricao: string,
  observacao: string,
  tipo: TipoTitulo,
  valor: number,
  dataReferencia: Date,
  dataVencimento: Date,
  centrodeCustos: CentrodeCusto[]
}

enum TipoTitulo {
  ENTRADA,
  SAIDA
}
