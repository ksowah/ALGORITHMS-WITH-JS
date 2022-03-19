class Node {
    constructor(data, next=null){
        this.data = data
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    // isert first node method
    insertNode(data){
        this.head = new Node(data, this.head)
        this.size++
    }

    // insert to the last index

    // insert to specific index

    // clear list data

    // print linked list data
}

const list = new LinkedList()

list.insertNode(100)

console.log(list);