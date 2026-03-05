export default class Stack{
     #data
    constructor(){   
    }
       
//metodo de inserção no vetor
push(val){
    this.#data.push(val)
}
    

//método pra remoção do valor
pop(){
   return this.#data.pop()
}
//metodo para consultar o topo da pilha 
peek(){
    return this.#data[this.#data.length - 1]
}

get isEmpty(){
    return this.#data.length === 0 
}
print(){
    return JSON.stringify(this.#data)
}

}