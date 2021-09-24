import PortaModel from "../models/porta";

// Função que retorna um array de PortaModel's
export function criarPortas(
    qtd: number, portaComPresente: number
): PortaModel[] {

    // Criar um array de portas com a quantidade de objetos informada
    // Se o número da porta for igual ao numero definido como portaComPresente, passa temPresente como true
    return Array.from({ length: qtd }, (_, i) => {
        const numero = i + 1
        const temPresente = (numero === portaComPresente)
        return new PortaModel(numero, temPresente)
    })
}

// Função que retorna um array de PortaModel's atualizado com porta modificada
export function atualizarPorta(
    portas: PortaModel[], portaModificada: PortaModel
): PortaModel[] {

    return portas.map(portaAtual => {
        const igualAModificada = (portaAtual.numero === portaModificada.numero)

        // Quando a porta atual da execução do map for a modificada, retorna a versão modificada da mesma, substituindo a antiga versão no array que será retornado pelo map
        // Todas as outras portas são retornadas como desselecionadas se a modificada não tiver sido aberta
        if (igualAModificada) {
            return portaModificada

        } else {
            const foiAberta = portaModificada.aberta
            return foiAberta ? portaAtual : portaAtual.desselecionar()
        }
    })

}
