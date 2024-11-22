package JAVAA.linkedList;
class Node{
    int data;
        Node next;
        Node(int data){
            this.data=data;
            this.next=null;
        }
    }
public class LinkedListBasic {
    public Node head;
    public void Append(int data){
        Node newNode=new Node(data);
        if(head==null){
            head=newNode;
        }
        if(head.next==null){
            head.next=newNode;
            return;
        }
        Node dup=head;
        while(dup.next!=null){
            dup=dup.next;
        }
        dup.next=newNode;
    }
    public static void main(String[] args) {
        Node A=new Node (10);
        Node B=new Node (20);
        A.next=B;
        Node C=new Node (30);
        Node D= new Node(40);
        B.next=D;
        D.next=C;

        System.out.println(A.data);
        System.out.println(A.next.data);
        System.out.println(A.next.next.data);
        System.out.println(A.next.next.next.data);

    }
}