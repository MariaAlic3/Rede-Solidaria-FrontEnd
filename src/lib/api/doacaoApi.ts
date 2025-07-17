import { apiDelete, apiGet, apiPost, apiPut } from "./baseApi";
import { Doacao } from "@/types/doacao";

export async function getDoacoes(): Promise<Doacao[]> {
    return await apiGet<Doacao[]>("/doacao");
}

export async function criarDoacao(data: Partial<Doacao>) {
    return await apiPost<Doacao>("/doacao/criar", data);
}

export async function deletarDoacao(id: string) {
    return await apiDelete<Doacao>(`/doacao/deletar/${id}`);
}

export async function atualizarDoacao(id: string, data: Partial<Doacao>) {
    return await apiPut<Doacao>(`/doacao/atualizar/${id}`, data);
}
