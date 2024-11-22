 public class Car  {
    String brand;
    int speed;
  public   void display(){
System.out.println("Brand"+brand+"Speed"+speed);}
public static void main (String args []){
    

Car mycar=new Car();
mycar.brand="bmw";
mycar.speed=120;
mycar.display();
    }
    
}