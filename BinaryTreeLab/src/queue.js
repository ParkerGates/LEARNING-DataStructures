class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(element) {
    this.data.push(element);
  }

  dequeue() {
    return this.data.shift();
  }

  peek() {
    return this.data[0];
  }

  size() {
    return this.data.length;
  }
}


/**
 * insert 8
 * remove 56
 * 
 * [ 4, 5, 7, 8, 12, 34, 87, 95, 95]
 * 
 * 
 * 
 */