//ATIVIDADE

import { Pedido } from "./classes/pedido"
import { Item } from "./classes/item"

const item1: Item = new Item(15, "Prato", "Prato fundo, branco")
const item2: Item = new Item(10, "Faca", "Faca com serilha")

const pedido: Pedido = new Pedido()
pedido.addItens(item1)
pedido.addItens(item2)
console.log(`Valor total do pedido: ${pedido.calculaValorTotal()}`);

console.log(pedido.mostraItem());

//ATIVIDADE 2

import { Circulo } from "./classes/circulo"
import { Retangulo } from "./classes/retangulo"

const circulo: Circulo = new Circulo(25)
circulo.desenhar()
circulo.redimensionar()

const retangulo: Retangulo =  new Retangulo(10, 5)
console.log(retangulo.calculaArea());
retangulo.desenhar()
retangulo.redimensionar()


//ATIVIDADE 4

import { Turma } from "./classes/turma"
import { Aluno } from "./classes/aluno"
import { Professor } from "./classes/professor"

const turmaA = new Turma("1A");
const aluno1 = new Aluno("João", 10);
const aluno2 = new Aluno("Maria", 11);
const professorMatematica = new Professor("Prof. Silva", 35, "Matemática");

turmaA.adicionarPessoa(aluno1);
turmaA.adicionarPessoa(aluno2);
turmaA.atribuirProfessor(professorMatematica);

turmaA.exibirInformacoesTurma();


  

