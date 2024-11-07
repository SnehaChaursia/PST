//  create a string which stores name of a person and create a method which add last name in original name .
// write a java program to reverse a string.
import java.lang.StringBuilder;

public class Question {
    public static void main(String[] args) {
        StringBuilder str=new StringBuilder("Sneha ");
        System.out.println(str);
        str.append("chaurasia");
        System.out.println(str);
        // System.out.println(str.toString());
        System.out.println(str.reverse());
    }
}


