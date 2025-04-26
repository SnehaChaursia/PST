import java.util.ArrayDeque;
import java.util.Deque;

public class Dequeue {
    public static void main(String[] args) {
        Deque <Integer> q=new ArrayDeque<>();
        q.offerFirst(1);
        q.offerFirst(2);
        q.offerLast(3);
        System.out.println(q);


    }
}


// offerFirst(ele): to insert in first 
// offerLast(ele); insert to insert last 
// peekFirst(); first element 
// peekLast();last element
// isEmpty() to check if queue is empty
// isFull(); to check queue is full
// size(); check size
// pollFirst(); remove first element
// pollLast();remove last element

// Implementation o f deque using:
// Linkedlist 
// doubly Linkedlist
 