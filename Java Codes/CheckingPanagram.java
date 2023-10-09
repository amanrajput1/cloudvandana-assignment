import java.util.*;

class CheckingPanagram
{

    public static void main(String[] args)
    {
        // For taking input, we will make object of Scanner class.
         Scanner sc =new Scanner(System.in);
         System.out.println("Enter the string to be checked");
        
        // Declaration and initialization of variables.
         String input=sc.nextLine();
         int array[]=new int[26];
         int n=input.length();
         int count=0;
          
         for(int i=0;i<n;i++)
         {
            // If there is space in the sentence we will ignore it.
            if(input.charAt(i)==' ')
            continue;
            else
            {
                /*  If characters comes first time then we will increase the counter variable 
                 and change its value to 1 in the array. */
                if(array[input.charAt(i)-97]==0)
                {
                    count++;
                    array[input.charAt(i)-97]=1;
                }
                
            }
         }
         
         //If counter value equals 26 then string is panagram.
         if(count==26)
         System.out.println("The given string is panagram");
         else
         System.out.println("The given string is not panagram");



    }
}