Given the head of a singly linked list, reverse the list, and return the reversed list.
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

// reverse a linked list  
var reverseLinkedList = function(linkedlist) {
    var node = linkedlist;
    var previous = null;
  
    while(node) {
      // save next or you lose it!!!
      var save = node.next;
      // reverse pointer
      node.next = previous;
      // increment previous to current node
      previous = node;
      // increment node to next node or null at end of list
      node = save;
    }
    return previous;   // Change the list head !!!
  }
  linkedlist = reverseLinkedList(linkedlist);