import java.util.*;

class RomanToInteger
{

    public static void main(String[] args)
    {
        // For taking input
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the roman to be converted");
        
        // Declaration and initialization of variables

        // It is for storing input as String.
        String roman=sc.next();
        // This map will store value of each roman code.
        HashMap<Character,Integer> charToNumber=new HashMap<>();
        charToNumber.put('I',1);
        charToNumber.put('V',5);
        charToNumber.put('X',10);
        charToNumber.put('L',50);
        charToNumber.put('C',100);
        charToNumber.put('D',500);
        charToNumber.put('M',1000);
        // This variable is for storing the answer.
        int answer=0;

        // For loop for traversing input string.
        for(int i=0;i<roman.length();i++)
        {

            // If we are at last character then will simply add into answer variable.
            if(i==roman.length()-1)
               answer += charToNumber.get(roman.charAt(i));
            
            /*  If roman code is smaller than next one then we will subtract smaller one 
             and then add it into answer and will skip the next character.*/
            else if(charToNumber.get(roman.charAt(i)) < charToNumber.get(roman.charAt(i+1)))
            {
                answer += (charToNumber.get(roman.charAt(i+1)) - charToNumber.get(roman.charAt(i)));
                i++;      
            }

            // In all other cases , we will simply add characters into the answer after converting them.
            else
                answer+=charToNumber.get(roman.charAt(i));  
    
        }

        System.out.println("After converting from Roman to Integer, answer is " + answer);

    }

} 