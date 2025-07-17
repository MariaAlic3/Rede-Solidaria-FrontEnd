import axios, { AxiosError } from 'axios';
import { Doacao } from '@/types/doacao';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export async function getDoacoes(): Promise<Doacao[]> {
  try {
    const res = await api.get('/doacao');
    return res.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
        const status = error.response?.status;
        const mensagem = error.response?.data?.message || 'Erro inesperado';
        
        throw new Error(`Erro ${status}: ${mensagem}`);
    }

    throw new Error('Erro inesperado');
  }
}


export async function criarDoacao(data: Partial<Doacao>) {
    try {
        const res = await api.post('/doacao/doar', data);
        return res.data;
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            const status = error.response?.status;
            const mensagem = error.response?.data?.message || 'Erro inesperado';
            
            throw new Error(`Erro ${status}: ${mensagem}`);
        }

        throw new Error('Erro inesperado'); 
    }
}

export async function deletarDoacao(id: string) {
    try {
        const res = await api.delete(`/doacao/deletar/${id}`);
        return res.data;
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            const status = error.response?.status;
            const mensagem = error.response?.data?.message || 'Erro inesperado';
            
            throw new Error(`Erro ${status}: ${mensagem}`);
        }

        throw new Error('Erro inesperado'); 
    }
}

export async function atualizarDoacao(id: string, data: Partial<Doacao>) {
    try {
        const res = await api.put(`/doacao/atualizar/${id}`, data);
        return res.data;
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            const status = error.response?.status;
            const mensagem = error.response?.data?.message || 'Erro inesperado';
            
            throw new Error(`Erro ${status}: ${mensagem}`);
        }

        throw new Error('Erro inesperado'); 
    }
}

