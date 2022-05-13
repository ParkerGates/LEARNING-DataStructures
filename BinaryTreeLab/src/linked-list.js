class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this._size = 0;
  }

  insert(data) {
    const newNode = new LinkedListNode(data);
    // check the head and see if it's a node or not
    if (!this.head) {
      this.head = newNode;
      this._size += 1;
    } else {
      // loop through the nodes starting at the head until you find
      // the one pointing to null
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      // insert the node there
      current.next = newNode;
      this._size += 1;
    }
  }

  contains(data) {
    // loop through the nodes starting at the head and if there is one with the data
    // return true otherwise check it's next
    let current = this.head;
    while (current) {
      if (current.data == data) {
        return true;
      } else {
        current = current.next;
      }
    }
    // if we never found the data return false
    return false;
  }

  remove(data) {
    // make sure list is not empty
    if (this.head) {
      // check to see if the node to be removed is the head
      if (this.head.data == data) {
        this.head = this.head.next;
        // decrement the size
        this._size -= 1;
      }
      // loop through the nodes and find the one we need to remove,
      // keeping track of the one before
      else {
        let previous = this.head;
        let current = this.head.next;
        while (current) {
          if (current.data == data) {
            // remove node by pointing it's previous node to it's next node
            previous.next = current.next;
            // decrement the size
            this._size -= 1;
            break;
          }
          previous = current;
          current = current.next;
        }
      }
    }
  }

  size() {
    return this._size;
  }
}

const list = new LinkedList();
console.log(JSON.stringify(list));
list.insert(12);
list.insert(99);
list.insert(37);
list.insert(56);
console.log(list.contains(99));
console.log(list.contains(56));
console.log(list.contains(2343));
