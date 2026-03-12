class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

export default class LinkedList {
  #head; // Início da lista (cabeça)
  #tail; // Final da lista (cauda)
  #count; // Quantidade de nodos da lista

  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#count = 0;
  }

  //getter que retorna se a lista encadeada está vazia ou não
  get isEmpty(){
    return this.#count === 0
  }


  //getter que retorna a quantidade de elementos da lista
  get count(){
    return this.#count
  } 

  //Método para inserir em qualquer posição
insert(pos, val){
    //cria o nodo para armazenar o valor pretendido
    const inserted = new Node(val)

    //1º caso: a lista está vazia

    if(this.isEmpty){
        this.#head = inserted
        this.#tail = inserted
    }


    this.#count++

}


}