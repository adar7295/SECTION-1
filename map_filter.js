const nums =[4,8,3,5,6];

const newNums=[];
for(let n of nums)
{
    newNums.push(n**3);
}
console.log(newNums);

const newArr =nums.map( (a) => { return a*2 } );
console.log(newArr);

const names=['raji','shamu','pinki','ramu','kaliya'];
const newArr1=names.map( (x)=> { return x.toUpperCase()});
console.log(newArr1);

const lower =['ADARSH','ABHAY','ARPIT','SHAURYA','AVIJJEET','VIKAS','PRABAL','ABHISHEK'];
const newArr2=lower.map( (b) => { return b.toLowerCase()});
console.log(newArr2);