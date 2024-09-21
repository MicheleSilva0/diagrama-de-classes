import { Item } from "./item";

export class Pedido {
    constructor(
        public valorTotal: number = 0,
        public itens: Item[] = []) {
    }

    public addItens(item: Item) {
        this.itens.push(item)
    }

    public mostraItem(): Array<Item> {
        return this.itens
    }

    public calculaValorTotal(): number {
        return this.valorTotal = this.itens.reduce((acumulador, valorAtual) => acumulador + valorAtual.valor, 0);
    }
}