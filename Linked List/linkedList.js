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
    insertToLastIndex(data){
        const node = new Node(data)
        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = node
        this.size++
    }

    // insert to specific index
    insertToIndex(data, index){
        let current = this.head
        let count = 0

        if(index === 0){
            this.head = new Node(data, this.head)
        }

        // while(count < index)
    }

    // clear list data
    clearList(){
        this.head = null
        this.size = 0
    }

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

// insert to last index
list.insertToLastIndex(88)
list.insertToLastIndex(29)

// clear list data
// list.clearList()

// print list data
list.printListData()

console.log(list);
