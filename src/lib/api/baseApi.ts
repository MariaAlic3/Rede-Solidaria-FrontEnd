import axios, { AxiosError } from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

/**
 * Tratador de erros para requisições HTTP
 * Se o erro for uma instância de AxiosError,
 * lança um Error com o status e a mensagem
 * recebidos na resposta. Caso contrário,
 * lança um Error com uma mensagem genérica
 * @param error Erro a ser tratado
 * @throws Error com o status e a mensagem recebidos
 *               na resposta ou uma mensagem genérica
 */
function handleApiError(error: unknown): never {
  if (error instanceof AxiosError) {
    const status = error.response?.status;
    const mensagem = error.response?.data?.message || 'Erro inesperado';
    throw new Error(`Erro ${status}: ${mensagem}`);
  }
  throw new Error('Erro inesperado');
}

/**
 * Realiza uma requisição GET para a API com a URL e headers
 * fornecidos. Caso a requisição seja bem sucedida, retorna
 * o conteúdo da resposta. Caso contrário, lança um Error com
 * o status e a mensagem recebidos na resposta.
 * @param url URL da requisição
 * @param headers Headers da requisição
 * @returns Conteúdo da resposta
 * @throws Error com o status e a mensagem recebidos
 *               na resposta
 */
export async function apiGet<T>(url: string, headers?: Record<string, string>): Promise<T> {
  try {
    const res = await api.get(url, { headers });
    return res.data;
  } catch (error) {
    handleApiError(error);
  }
}

/**
 * Realiza uma requisição POST para a API com a URL, headers e dados
 * fornecidos. Caso a requisição seja bem sucedida, retorna
 * o conteúdo da resposta. Caso contrário, lança um Error com
 * o status e a mensagem recebidos na resposta.
 * @param url URL da requisição
 * @param data Dados a serem enviados na requisição
 * @param headers Headers da requisição
 * @returns Conteúdo da resposta
 * @throws Error com o status e a mensagem recebidos na resposta
 */
export async function apiPost<T>(url: string, data: unknown, headers?: Record<string, string>): Promise<T> {
  try {
    const res = await api.post(url, data, { headers });
    return res.data;
  } catch (error) {
    handleApiError(error);
  }
}

/**
 * Realiza uma requisição PUT para a API com a URL e dados
 * fornecidos. Caso a requisição seja bem sucedida, retorna
 * o conteúdo da resposta. Caso contrário, lança um Error com
 * o status e a mensagem recebidos na resposta.
 * @param url URL da requisição
 * @param data Dados a serem enviados na requisição
 * @returns Conteúdo da resposta
 * @throws Error com o status e a mensagem recebidos na resposta
 */
export async function apiPut<T>(url: string, data: unknown, headers?: Record<string, string>): Promise<T> {
  try {
    const res = await api.put(url, data, { headers });
    return res.data;
  } catch (error) {
    handleApiError(error);
  }
}

/**
 * Realiza uma requisição DELETE para a API com a URL fornecida.
 * Caso a requisição seja bem sucedida, retorna o conteúdo da resposta.
 * Caso contrário, lança um Error com o status e a mensagem recebidos na resposta.
 * @param url URL da requisição
 * @returns Conteúdo da resposta
 * @throws Error com o status e a mensagem recebidos na resposta
 */
export async function apiDelete<T>(url: string, headers?: Record<string, string>): Promise<T> {
  try {
    const res = await api.delete(url, { headers });
    return res.data;
  } catch (error) {
    handleApiError(error);
  }
}
