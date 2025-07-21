import { Localizacao } from "@/src/types/localizacao"
import { apiDelete, apiGet, apiPost, apiPut } from "./baseApi";

export async function getLocalizacoes(): Promise<Localizacao[]> {
    return await apiGet<Localizacao[]>("/localizacao");
}

export async function criarLocalizacao(data: Partial<Localizacao>) {
    return await apiPost<Localizacao>("/localizacao/criar", data);
}

export async function deletarLocalizacao(id: string) {
    return await apiDelete<Localizacao>(`/localizacao/deletar/${id}`);
}

export async function atualizarLocalizacao(id: string, data: Partial<Localizacao>) {
    return await apiPut<Localizacao>(`/localizacao/atualizar/${id}`, data);
}