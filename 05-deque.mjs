import Deque from "./lib/Deque.mjs";

let listaCompras = new Deque()
console.log(listaCompras.print());
console.log("Esta vazia?\n", listaCompras.isEmpty)

//produtos alimenticios -> inicio
listaCompras.insertFront("Arroz")
listaCompras.insertFront("Feijão")
listaCompras.insertFront("Macarrão")
console.log(listaCompras.print())


//produtos de higiene/limpeza -> final 
listaCompras.insertBack("sabão em pó")
listaCompras.insertBack("Desodorante")
listaCompras.insertBack("Agua sanitaria")

console.log(listaCompras.print())


