import java.util.Scanner;
public class Main
{
public static void main(String[] args) {
Scanner pegasus = new Scanner (System.in); 
System.out.println("Digite o volume"); 
double Volume = pegasus.nextDouble (); 
System.out.println("Digite a area da base"); 
double AB = pegasus.nextDouble (); 
double Altura = (Volume)/(AB); 
System.out.println("O valor da Altura é : "+Altura);
    }

    
  }
