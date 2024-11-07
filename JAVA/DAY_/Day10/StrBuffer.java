package Day10;
// string buffer is  also mutable
import java.lang.StringBuffer;
public class StrBuffer {
    public static void main(String[] args) {

        StringBuffer str = new StringBuffer("Hello");
        System.out.println(str);
        str.append(" world");
        System.out.println(str);
    }
}
