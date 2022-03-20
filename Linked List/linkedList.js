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
        if(index > this.size) return
        let current = this.head
        let count = 1
        let newNext

        if(index === 0){
            this.head = new Node(data, this.head)
            this.size++
        }
        else{
            while(count < index){
                current = current.next
                count++
            }
        }

        newNext = current.next
        current.next = new Node(data, newNext)
        this.size++

    }

    // get the size of linked list
    getListSize(){
        console.log("This is the size of list >>> " + this.size);
    }

    // delete at specific index
    deleteAtIndex(index){
        let current = this.head
        let count = 0

        if(index === 0){
           this.head = current.next
           console.log(this.head);
        }

        while(count <= index){
            current = current.next
            count++
        }

        this.insertToLastIndex(current)
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

// insert to specific index
list.insertToIndex(888, 2)

// clear list data
// list.clearList()

// print list data
list.printListData()

// get the size of linked list
list.getListSize()

// list.deleteAtIndex(0)

