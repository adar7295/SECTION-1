//1. Create a function to take range as a parameter and return sum of all number in that range

const range = function(start,end) {
    
    let sum=0;
    for(let i=start; i<=end; i++)
    {
        sum=sum+i;
    }
    return sum;
    //  console.log(sum);
}
const result=range(100,200);
console.log(result);

//2. Create a function check if a number is palindrome
