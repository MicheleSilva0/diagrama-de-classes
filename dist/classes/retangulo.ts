import { FormatoDoElemento } from "./formatoDoElemento";

export class Retangulo implements FormatoDoElemento {
    constructor(
        public comprimento: number,
        public altura: number
    ){}

    public calculaArea(): number{
        return this.comprimento * this.altura
    }

    public desenhar(): void {
        console.log("Desenhando retangulo");
    }

    public redimensionar(): void {
        console.log("Redimensionando retangulo"); 
    }
}