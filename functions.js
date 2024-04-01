function addNums(a,b){
    c=a+b;
console.log(c);

}
addNums(10,20);
//console.log(c);

const getAvg = function(n1,n2,n3){
    //console.log((n1+n2+n3)/3);
    let avg=(n1+n2+n3)/3;
    return avg;
}
const result =getAvg(50,52,12)
console.log(result);

const factorial = (n) => {
    let f=1;
    for(let i=2;i<=n;i++)
    {
        f*=i;
    }
    return f;
}

const fact6 =factorial(6);
console.log(fact6);

const perfectsq =() => {
    let m;
    let sqrt=m**0.5;
    return sqrt === parseInt(sqrt);

}
if(perfectsq(35)){
    console.log('perfect square');

}
else{
    console.log('not a perfect square');
}

