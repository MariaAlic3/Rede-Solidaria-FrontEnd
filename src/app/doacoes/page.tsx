import { Doacao } from "@/src/types/doacao"
import { getDoacoes } from "@/lib/api/doacaoApi"

export default async function Doacoes() {
  let doacoes: Doacao[] = []

  try {
    doacoes = await getDoacoes()
  } catch (error) {
    console.error("Erro ao buscar doações:", error)
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Doações</h1>
      {doacoes.length > 0 ? (
        doacoes.map((doacao) => (
          <div
            key={doacao.id_doacao}
            className="space-y-2 border border-gray p-4 rounded-md"
          >
            <p className="text-lg">Quantidade: {doacao.quantidade}</p>
            <p>Validade: {new Date(doacao.validade).toLocaleDateString()}</p>
            <p className="text-lg">Tipo de Doação: {doacao.tipo_doacao}</p>
            <p className="text-lg">Descrição da Doação: {doacao.descricao_doacao}</p>
          </div>
        ))
      ) : (
        <p className="text-muted-foreground">Nenhuma doação encontrada.</p>
      )}
    </div>
  )
}


/*import { getDoacoes } from "@/lib/api/doacaoApi";
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
*/