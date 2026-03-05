import Stack from "./lib/Queue.mjs"

let fila = new Queue()
console.log(fila.print())
console.log("Esta vazia?", fila.isEmpty)

//inserções na fila

FileReader.enqueue("Alexandre")
FileReader.enqueue("João")
FileReader.enqueue("Maria")
FileReader.enqueue("Joaqum")

let proximo = fila.peek()
    console.log({proximo})

let atendido = fila.dequeue()
    console.log({atendido})
    console.log(fila.print())
    proximo = fila.peek
    console.log({proximo})

    fila.enqueue("Sergio")
    console.log(fila.print())


