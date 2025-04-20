public class ArrayQueue{
    private int capacity;
    private int rear;
    private int front;
    private int size;
    private int[] arr;

    public ArrayQueue(int capacity){
        this.capacity=capacity;
        this.arr=new int [capacity];
        this.rear=-1;
        this.front=0;
        this.size=0;
    }

    public boolean isEmpty(){
        return size==0;
    }
    public void enqueue(int data){
        if(isFull()){
            System.out.println("Queue is full");
            return;
            
        }
        rear++;
        arr[rear]=data;
        size++;
    }
    public int dequeue(){
        if(isEmpty()){
            System.out.println("the queue is empty");
            return -1;
        }
          int removed = arr[front];
           front++;
           size--;
           return removed;

    }

    public int peek(){
        if(isEmpty()){
            System.out.println("Stack is empty");
            return -1;
        }
       
        return arr[front];
    }

    public int size(){
        return size;
    }

    public boolean isFull(){
       return size==capacity;
    }
    // Display elements
 public void display() {
    if (isEmpty()) {
    System.out.println("Queue is empty.");
    return;
    }
    System.out.print("Queue elements: ");
    for (int i = front; i <= rear; i++) {
    System.out.print(arr[i] + " ");
    }
    
    }

    public static void main(String[] args) {
        ArrayQueue q =new ArrayQueue(3);
        q.enqueue(1);
        q.enqueue(2);
        q.enqueue(3);
        q.display();
        // System.out.println("Dequeued: " + q.dequeue());
        // q.display();
        // System.out.println("Front element: " + q.peek());
        // System.out.println("Current size: " + q.size());
        // q.isFull();
 
    }
}