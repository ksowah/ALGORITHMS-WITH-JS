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

    // isert first node
    insertNode(data){
        this.head = new Node(data, this.head)
        this.size++
    }

    // insert to the last index
    insertToLastIndex(){

    }

    // insert to specific index

    // clear list data

    // print linked list data
    printListData(){
        let current = this.head
        while(current){
            console.log(current.data)
            current = current.next
        }
    }
}

const list = new LinkedList()

list.insertNode(100)
list.insertNode(120)
list.insertNode(34)
list.insertNode(42)

// print list data
list.printListData()

console.log(list);