
// Taking input as string.
let inputString = prompt("Enter the Sentence");

// Collecting all words in the array.
let words = inputString.split(" ");

var answer = "",reverseWord = "";

// Traversing the words array.
for(var i=0;i<words.length;i++)
{
    
    reverseWord = "";
    
    // Reversing each word by traversing it.
    for(var j=words[i].length-1;j>=0;j--)
    {
       reverseWord += words[i].charAt(j);
    }
    
    // Adding reversed words to the answer string.
    if(i==0)
      answer += reverseWord;
    else
      answer += " " + reverseWord;


}

console.log(answer);