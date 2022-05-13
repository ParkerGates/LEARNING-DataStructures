class BSTNode {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this._size = 0;
  }

  insert(data) {
    // make sure data has a key
    if (data.key) {
      // create new node
      let newNode = new BSTNode(data);
      // if root is null tree is empty so make new node the root
      if (!this.root) {
        this.root = newNode;
        // and increase the size
        this._size += 1;
      } else {
        let current = this.root;
        // traverse the tree until we find the place where the node
        // should be inserted
        while (true) {
          // key is already there
          if (current.data.key == data.key) {
            break;
          }

          // key is greater than
          if (data.key > current.data.key) {
            // node has no right child
            if (!current.right) {
              current.right = newNode;
              // and increase the size
              this._size += 1;
              break;
            } else {
              // let's look at the right child
              current = current.right;
            }
          }
          // key is less than
          else {
            if (!current.left) {
              current.left = newNode;
              // and increase the size
              this._size += 1;
              break;
            } else {
              // let's look at the left child
              current = current.left;
            }
          }
        }
      }
    }
  }

  // returns the data of the node if the node by that key is in the tree
  find(key) {
    let current = this.root;
    if (current.data.key == key) {
      return current.data.data.name;
    }

    let count = 0;
    while (true) {
      //NOT EQUAL TO CUR KEY
      if (current.data.key != key) {
        //BIGGER TO RIGHT
        if (key > current.data.key){
          if (current.right == null) { return; }
          current = current.right;
        }
        //SMALLER TO LEFT
        else if (key < current.data.key) {
          if (current.left == null) { return; }
          current = current.left;
        }
      }
      //IS EQUAL TO CURRENT
      if (current.data.key == key) {
        return current.data.data.name;
      }
    }
  }





  // don't have to implement this one
  remove(key) {}

  size() {
      return this._size;
  }

  // returns an array with the elements sorted
  toArray() {
    console.log("START-----------------------------")
    let arr = []
    let answer = [];
    let lowest = {key: Number.POSITIVE_INFINITY}
    let where;

    function putInList(start) {
      arr.push({
        key: start.data.key,
        data: start,
      });

      if (start.right) {
        putInList(start.right);
      }
      if (start.left) {
        putInList(start.left);
      }
    }

    putInList(this.root);

    for (let l = 0; l < this._size; l++) {
      for (let i of arr) {
          if (i.key < lowest.key)
          lowest = i;
      }
      answer.push(lowest.data.data);
      where = arr.indexOf(lowest);
      arr.splice(where, 1);
      lowest = {key: Number.POSITIVE_INFINITY}
    }

    return answer;
  }
}

let bst = new BinarySearchTree();

bst.insert({
  key: 8,
  name: 'eight',
});
bst.insert({
  key: 3,
  name: 'three',
});
bst.insert({
  key: 10,
  name: 'ten',
});
bst.insert({
  key: 14,
  name: 'fourteen',
});
bst.insert({
  key: 13,
  name: 'thirteen',
});
bst.insert({
  key: 1,
  name: 'one',
});
bst.insert({
  key: 6,
  name: 'six',
});
bst.insert({
  key: 4,
  name: 'four',
});
bst.insert({
  key: 7,
  name: 'seven',
});
