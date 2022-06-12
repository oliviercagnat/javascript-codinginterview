Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

 

Example 1:


Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
Example 2:


Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
Example 3:


Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.

<script>

// JavaScript program to detect loop in a linked list
	var head; // head of list

	/* Linked list Node */
	class Node {
		constructor(val) {
			this.data = val;
			this.next = null;
		}
	}
	/* Inserts a new Node at front of the list. */
	function push(new_data) {
		/*
		* 1 & 2: Allocate the Node & Put in the data
		*/
var new_node = new Node(new_data);

		/* 3. Make next of new Node as head */
		new_node.next = head;

		/* 4. Move the head to point to new Node */
		head = new_node;
	}

	// Returns true if there is a loop in linked
	// list else returns false.
	function detectLoop(h) {
		var s = new Set();
		while (h != null) {
			// If we have already has this node
			// in hashmap it means their is a cycle
			// (Because you we encountering the
			// node second time).
			if (s.has(h))
				return true;

			// If we are seeing the node for
			// the first time, insert it in hash
			s.add(h);

			h = h.next;
		}

		return false;
	}

	/* Driver program to test above function */
	

		push(20);
		push(4);
		push(15);
		push(10);

		/* Create loop for testing */
		head.next.next.next.next = head;

		if (detectLoop(head))
			document.write("Loop found");
		else
			document.write("No Loop");

// This code is contributed by todaysgaurav

</script>



<script>

// JavaScript program to detect loop in a linked list

// Link list node
class Node
{
	constructor()
	{
		let data;
		let next;
		let flag;
	}
}

function push( head_ref, new_data)
{
	// Allocate node
	let new_node = new Node();

	// Put in the data
	new_node.data = new_data;

	new_node.flag = 0;

	// Link the old list off the new node
	new_node.next = head_ref;

	// Move the head to point to the new node
	head_ref = new_node;
	return head_ref;
}

// Returns true if there is a loop in linked
// list else returns false.
function detectLoop(h)
{
	while (h != null)
	{
		
		// If this node is already traverse
		// it means there is a cycle
		// (Because you we encountering the
		// node for the second time).
		if (h.flag == 1)
			return true;

		// If we are seeing the node for
		// the first time, mark its flag as 1
		h.flag = 1;

		h = h.next;
	}
	return false;
}

// Driver code

// Start with the empty list
	let head = null;

	head = push(head, 20);
	head = push(head, 4);
	head = push(head, 15);
	head = push(head, 10);

	// Create a loop for testing
	head.next.next.next.next = head;

	if (detectLoop(head))
		document.write("Loop found");
	else
		document.write("No Loop");



// This code is contributed by rag2127

</script>
