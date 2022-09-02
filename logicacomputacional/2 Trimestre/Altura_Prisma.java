import java.util.Scanner;
public class Main
{
public static void main(String[] args) {
Scanner pegasus = new Scanner (System.in); 
System.out.println("Digite o volume"); 
double Volume = pegasus.nextDouble (); 
System.out.println("Digite a altura"); 
double Altura = pegasus.nextDouble (); 
double AF = (Volume)/(Altura); 
System.out.println("O valor da area da face : "+AF);
    }

    
  }
