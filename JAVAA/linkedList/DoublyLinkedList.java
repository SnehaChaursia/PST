package JAVAA.linkedList;
class Node {
    int data;       // Data stored in the node
    Node next;      // Pointer to the next node
    Node prev;      // Pointer to the previous node

    // Constructor to initialize a new node
    Node(int data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

public class DoublyLinkedList {
    public static void main(String[] args) {
        // Create individual nodes
        Node first = new Node(10);
        Node second = new Node(20);
        Node third = new Node(30);

        
        first.next = second;  
        second.prev = first;  
        second.next = third;
        third.prev = second; 

        // Traverse the list forward
        System.out.println("Forward Traversal:");
        Node current = first;
        while (current != null) {
            System.out.print(current.data + " ");
            current = current.next;
        }

        // Traverse the list backward
        System.out.println("\nBackward Traversal:");
        current = third;  // Start from the last node
        while (current != null) {
            System.out.print(current.data + " ");
            current = current.prev;
        }
    }
}
