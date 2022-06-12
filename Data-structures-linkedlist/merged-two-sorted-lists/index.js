<script>

class Node
{
	constructor(d)
	{
		this.data=d;
		this.next = null;
	}
}

class LinkedList
{

constructor()
{
	this.head=null;
}


addToTheLast(node)
{
	if (this.head == null)
	{
		this.head = node;
	}
	else
	{
		let temp = this.head;
		while (temp.next != null)
			temp = temp.next;
		temp.next = node;
	}
}

printList()
{
	let temp = this.head;
	while (temp != null)
	{
		document.write(temp.data + " ");
		temp = temp.next;
	}
	document.write("<br>");
}
}

function sortedMerge(headA,headB)
{
	/* a dummy first node to
	hang the result on */
	let dummyNode = new Node(0);
	
	/* tail points to the
	last result node */
	let tail = dummyNode;
	while(true)
	{
		
		/* if either list runs out,
		use the other list */
		if(headA == null)
		{
			tail.next = headB;
			break;
		}
		if(headB == null)
		{
			tail.next = headA;
			break;
		}
		
		/* Compare the data of the two
		lists whichever lists' data is
		smaller, append it into tail and
		advance the head to the next Node
		*/
		if(headA.data <= headB.data)
		{
			tail.next = headA;
			headA = headA.next;
		}
		else
		{
			tail.next = headB;
			headB = headB.next;
		}
		
		/* Advance the tail */
		tail = tail.next;
	}
	return dummyNode.next;
}


/* Let us create two sorted linked
	lists to test the methods
	Created lists:
		llist1: 5->10->15,
		llist2: 2->3->20
	*/
let llist1 = new LinkedList();
let llist2 = new LinkedList();

// Node head1 = new Node(5);
llist1.addToTheLast(new Node(5));
llist1.addToTheLast(new Node(10));
llist1.addToTheLast(new Node(15));

// Node head2 = new Node(2);
llist2.addToTheLast(new Node(2));
llist2.addToTheLast(new Node(3));
llist2.addToTheLast(new Node(20));


llist1.head = sortedMerge(llist1.head,
									llist2.head);
document.write("Merged Linked List is:<br>")
llist1.printList();

// This code is contributed by patel2127
</script>
