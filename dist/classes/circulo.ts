import { FormatoDoElemento } from "./formatoDoElemento";

export class Circulo implements FormatoDoElemento {
    constructor(
        public _raio: number
    ) { }

    public set raio(raio: number) {
        this._raio = raio
    }

    public desenhar(): void {
        console.log("Desenhando Circulo");
    }

    public redimensionar(): void {
        console.log("Redimenionando circulo");
    }
}