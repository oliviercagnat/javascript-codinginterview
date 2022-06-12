Given the head of a singly linked list, return true if it is a palindrome


<script>
// JavaScript program to check if
// linked list is palindrome recursively
class Node
{
	constructor(val)
	{
		this.data = val;
		this.ptr = null;
	}
}
	
var one = new Node(1);
var two = new Node(2);
var three = new Node(3);
var four = new Node(4);
var five = new Node(3);
var six = new Node(2);
var seven = new Node(1);
one.ptr = two;
two.ptr = three;
three.ptr = four;
four.ptr = five;
five.ptr = six;
six.ptr = seven;
var condition = isPalindrome(one);
document.write("isPalidrome: " + condition);
	
function isPalindrome(head)
{
	var slow = head;
	var ispalin = true;
	var stack = [];

	while (slow != null)
	{
		stack.push(slow.data);
		slow = slow.ptr;
	}

	while (head != null)
	{
		var i = stack.pop();
		if (head.data == i)
		{
			ispalin = true;
		}
		else
		{
			ispalin = false;
			break;
		}
		head = head.ptr;
	}
	return ispalin;
}
// This code is contributed by todaysgaurav
</script>




function isListPalindrome(l) {
    let curr = l;
    let arr = [];
  
    if (l == null)
        return true;
  
    // push all elements of l into the stack.
    // a stack in JS is an array.
    while(curr != null){
      arr.push(curr.value);
  
      // move ahead:
      curr = curr.next;
    }
  
    let curr2 = l;
    let length = arr.length;
    // Traverse the list again & check by popping from the stack:
    while(curr2 != null){
  
      // get the top most element on the stack:
      let lastNum = arr.pop();
  
      // check if the node data isn't the same as the element popped:
      if (curr2.value != lastNum){
        return false;
      }
  
      // Half way point for evens
      if (length / 2 === arr.length) {
        return true;
      }
  
      // move ahead:
      curr2 = curr2.next;
    }
    return true;
  }