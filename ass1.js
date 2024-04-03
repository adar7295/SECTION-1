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

    
    let n=1221;
    let rem;
    let rev=0;
    let temp=n;
    while(n!=0){
        
        rem=n%10;
        rev=(rev*10)+rem;
        n=parseInt(n/10);
    }

    if(temp==rev){
        
        console.log("pallindrome");
    }
    
