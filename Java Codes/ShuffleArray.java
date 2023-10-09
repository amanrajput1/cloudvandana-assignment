import java.util.*;

class ShuffleArray
{

    public static void main(String[] args)
    {
        // Declaration and intialization of array and variables.  
        int array[] = {1,2,3,4,5,6,7};
        int n = array.length;

        //Creating object of random class.
        Random rand = new Random();

        for (int i = 0; i < n; i++) 
        {
            //Setting j to any random number between 0 and n.
            int j = rand.nextInt(n);
              
            // Swap arr[i] and arr[j]
            int temp = array[i];
            array[i] = array[j];
            array[j] = temp;

        }
        
        // Printing the shuffled array.
        for(int i=0;i<n;i++)
        {
            System.out.print(array[i]+" ");
        }

    }

}