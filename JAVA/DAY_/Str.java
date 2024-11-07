// String literals are immutable.
public class Str {

    public static void main(String[] args) {
        String str = "Hello";
        System.out.println(str);
        String str2="world";
        System.out.println(str2);
        str.concat("world");
        System.out.println(str);  
    System.out.println(str.concat(" world")); // it won' t make any change in original str return a new str.

    System.out.println(str.length());
    System.out.println(str.charAt(3));
    System.out.println(str.toUpperCase()); //it won't make change in original str.
    System.out.println(str.toLowerCase());
    System.out.println(str.equals(str2));
    // System.out.println(str.toCharArray());

    }
}
// string builder & string buffer is mutable.
// tring methods:
// 1: .length()
// 2:.charAt()
// 3:.toUpperCase()
// 4:.toLowerCase()
// 5:.equals()
// 6:.concat()
// 7:.toCharArray()