import java.util.Queue;
import java .util.LinkedList;

public  class lllibrary{

public static void main(String[] args) {
    Queue <Integer> q=new LinkedList<>();
    q.add(3);
    q.add(4);
    q.add(5);
    System.out.println(q.peek());
    System.out.println(q.remove());
    System.out.println(q.remove());
    System.out.println(q.isEmpty());
//    System.out.println(q.isFull());  // isFull() methoo is not avail for ll arraylist , as they have dynamic size
}
}
