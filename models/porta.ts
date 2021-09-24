export default class PortaModel {
    // Atributos privados
    #numero: number
    #temPresente: boolean
    #selecionada: boolean
    #aberta: boolean

    constructor(numero: number, temPresente = false, selecionada = false, aberta = false) {
        this.#numero = numero
        this.#temPresente = temPresente
        this.#selecionada = selecionada
        this.#aberta = aberta
    }

    get numero() {
        return this.#numero;
    }

    get temPresente() {
        return this.#temPresente;
    }

    get selecionada() {
        return this.#selecionada;
    }

    get aberta() {
        return this.#aberta;
    }

    get fechada() {
        return !this.aberta;
    }

    // Comportamentos do objeto porta
    // Obs: Não alteram diretamente os atributos do objeto mas retornam uma nova instância com valores atualizados

    desselecionar() {
        const selecionada = false
        return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta)
    }

    alternarSelecao() {
        const selecionada = !this.selecionada
        return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta)
    }

    abrir() {
        const aberta = true
        return new PortaModel(this.numero, this.temPresente, this.selecionada, aberta)
    }
}