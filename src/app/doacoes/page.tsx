import { getDoacoes } from "@/lib/api/doacaoApi";
export default async function Doacoes() {
    const doacoes = await getDoacoes();
    
    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">Doações</h1>
            {doacoes.map((doacao) => (
                <div key={doacao.id_doacao} className="space-y-2 border border-gray">
                    <p className="text-lg">Quantidade: {doacao.quantidade}</p>
                    <p>Validade: {new Date(doacao.validade).toLocaleDateString()}</p>
                    <p className="text-lg">Tipo de Doação: {doacao.tipo_doacao}</p>
                    <p className="text-lg">Descrição da Doação: {doacao.descricao_doacao}</p>
                </div>
            ))}
        </div>
    );
}