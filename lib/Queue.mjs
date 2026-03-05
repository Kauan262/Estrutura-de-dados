export default class Queue{
    #data//Vetor print 

    constructor(){
        this.#data = []
    }

    //metodo de inserção na fila
    enqueue(val){
        this.#data.push(val)
    }

    //metodo de remoção na fila
    dequeue(){
        return this.#data.unshift()
    }
    //metodo para consultar o inicio da fila sem remover o elemento 
    peek(){
        return this.#data[0]
    }

    get isEmpty(){
        return this.#data.length ===0
    }

    //metodo para imprimir a fila(efeitos de depuracao)
    print(){
        let output = '['
        for(let i = 0; i < this.#data.length; i++ ){
            if(output !== "["){
                output += ", "
            } 
            output += `(${i+1}): ${this.#data[i]}`
        }
        return output + ']'
    }

}
