import { Pessoa } from "./pessoa";

export class Aluno extends Pessoa {
    constructor(nome: string, idade: number) {
        super(nome, idade);
    }

    exibirInformacoes(): void {
        console.log(`Aluno: ${this.nome}, Idade: ${this.idade}`);
    }
}