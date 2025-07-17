export interface Localizacao {
  id_localizacao: string;
  nome: string;
  latitude: number;
  longitude: number;
  id_organizacao: string;
  organizacao: {
    id_organizacao: string;
    nome: string;
    cnpj: string;
    endereco: string;
    telefone: string;
    email: string;
    id_doadores: number;
  };
}
