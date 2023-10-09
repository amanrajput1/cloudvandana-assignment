
// Declaring and initializing array.
let array= [1,2,3,4,5];

for(var i=0;i<array.length-1;i++)
{
    for(var j=0;j<array.length-1;j++)
    {
        // Swapping the elements if second one is greater than first.
        if(array[j]<array[j+1])
          {
            var temp=array[j];
            array[j]=array[j+1];
            array[j+1]=temp;
          }
    }
}

for(var i=0;i<array.length;i++)
{
    console.log(array[i]+" ");
}
