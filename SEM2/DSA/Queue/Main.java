// Node class
class Node {
    int data;
    Node next;
    Node prev;

    Node(int data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

// Deque using Doubly Linked List
class DequeLinkedList {
    Node front, rear;

    public DequeLinkedList() {
        front = rear = null;
    }

    // Insert at front
    void insertFront(int data) {
        Node newNode = new Node(data);
        if (front == null) {
            front = rear = newNode;
        } else {
            newNode.next = front;
            front.prev = newNode;
            front = newNode;
        }
    }

    // Insert at rear
    void insertRear(int data) {
        Node newNode = new Node(data);
        if (rear == null) {
            front = rear = newNode;
        } else {
            rear.next = newNode;
            newNode.prev = rear;
            rear = newNode;
        }
    }

    // Delete from front
    void deleteFront() {
        if (front == null) {
            System.out.println("Deque is empty!");
            return;
        }
        if (front == rear) { // only one element
            front = rear = null;
        } else {
            front = front.next;
            front.prev = null;
        }
    }

    // Delete from rear
    void deleteRear() {
        if (rear == null) {
            System.out.println("Deque is empty!");
            return;
        }
        if (front == rear) {
            front = rear = null;
        } else {
            rear = rear.prev;
            rear.next = null;
        }
    }

    // Display deque
    void display() {
        if (front == null) {
            System.out.println("Deque is empty!");
            return;
        }

        Node temp = front;
        System.out.print("Deque: ");
        while (temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.next;
        }
        System.out.println();
    }
}

// Main class to test
public class Main {
    public static void main(String[] args) {
        DequeLinkedList dq = new DequeLinkedList();

        dq.insertFront(10); // 10
        dq.insertFront(20); // 20 10
        dq.insertRear(30);  // 20 10 30
        dq.display();

        dq.deleteFront();   // 10 30
        dq.display();

        dq.deleteRear();    // 10
        dq.display();
    }
}
