class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
    return array;
  }

  insert(index, value) {
    // Check for proper parameters;
    if (index >= this.length) {
      console.log('yes');
      return this.append(value);
    }

    const newNode = {
      value,
      next: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  traverseToIndex(index) {
    // Check parameters
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    // Check Parameters
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.printList();
console.log(myLinkedList);
myLinkedList.append(5);
myLinkedList.printList();
console.log(myLinkedList);
myLinkedList.append(16);
myLinkedList.printList();
console.log(myLinkedList);
myLinkedList.prepend(1);
myLinkedList.printList();
console.log(myLinkedList);
myLinkedList.insert(2, 99);
myLinkedList.printList();
console.log(myLinkedList);
myLinkedList.insert(20, 88);
myLinkedList.printList();
console.log(myLinkedList);
myLinkedList.remove(2);
myLinkedList.printList();
console.log(myLinkedList);
myLinkedList.reverse();
myLinkedList.printList();
console.log(myLinkedList);