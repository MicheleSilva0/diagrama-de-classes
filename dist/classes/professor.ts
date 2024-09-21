import { Pessoa } from "./pessoa";

export class Professor extends Pessoa {
    private disciplina: string;

    constructor(nome: string, idade: number, disciplina: string) {
        super(nome, idade);
        this.disciplina = disciplina;
    }

    exibirInformacoes(): void {
        console.log(`Professor: ${this.nome}, Idade: ${this.idade}, Disciplina: ${this.disciplina}`);
    }
}