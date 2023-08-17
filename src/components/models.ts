export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface ProcessData {
  id: number;
  numProcesso: string;
  criador: string;
  unidadeCriador: string;
  interessado: string;
  observacao: string;
  assunto: string;
  servico: string;
  valorProcesso: number;
  valorExecutado: number;
  status: string;
  anexos: string[];
}
