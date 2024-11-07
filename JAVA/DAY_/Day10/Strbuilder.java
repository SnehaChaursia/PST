package Day10;
// String builder is mutable
import java.lang.StringBuilder;
public class Strbuilder {
    public static void main(String[] args) {
        
        StringBuilder str=new StringBuilder("hello");
        System.out.println(str);
        str.append("world");
        System.out.println(str);
        System.out.println(str.toString());
        System.out.println(str.insert(5,"java"));

    }
    
}
// thread unsafe.
// fast
// memory efficient
//  String Methods:
// .toString()
// .append()
// .insert(index,value)
// .delete()
// .replace()
// .reverse()
// .setCharAt()
// .reverse()
