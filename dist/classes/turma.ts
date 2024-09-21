import { Pessoa } from "./pessoa";
import { Professor } from "./professor";

export class Turma {
    private nome: string;
    private alunos: Pessoa[];
    private professor: Professor | null;

    constructor(nome: string) {
        this.nome = nome;
        this.alunos = [];
        this.professor = null;
    }

    adicionarPessoa(pessoa: Pessoa): void {
        this.alunos.push(pessoa);
    }

    atribuirProfessor(professor: Professor): void {
        this.professor = professor;
    }

    exibirInformacoesTurma(): void {
        console.log(`Turma: ${this.nome}`);
        this.alunos.forEach(pessoa => pessoa.exibirInformacoes());

        if (this.professor) {
            this.professor.exibirInformacoes();
        } else {
            console.log("Nenhum professor atribuído a esta turma.");
        }
    }
}