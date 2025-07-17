import axios, { AxiosError } from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

function handleApiError(error: unknown): never {
  if (error instanceof AxiosError) {
    const status = error.response?.status;
    const mensagem = error.response?.data?.message || 'Erro inesperado';
    throw new Error(`Erro ${status}: ${mensagem}`);
  }
  throw new Error('Erro inesperado');
}

export async function apiGet<T>(url: string): Promise<T> {
  try {
    const res = await api.get(url);
    return res.data;
  } catch (error) {
    handleApiError(error);
  }
}

export async function apiPost<T>(url: string, data: unknown): Promise<T> {
  try {
    const res = await api.post(url, data);
    return res.data;
  } catch (error) {
    handleApiError(error);
  }
}

export async function apiPut<T>(url: string, data: unknown): Promise<T> {
  try {
    const res = await api.put(url, data);
    return res.data;
  } catch (error) {
    handleApiError(error);
  }
}

export async function apiDelete<T>(url: string): Promise<T> {
  try {
    const res = await api.delete(url);
    return res.data;
  } catch (error) {
    handleApiError(error);
  }
}
