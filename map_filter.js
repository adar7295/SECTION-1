//maps
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


//filters

const evenNums = nums.filter((n) => {return n%2===0});
console.log(evenNums);

const prices = [530,990,2880,3200,800,120];
const ranges = prices.filter((n)=>{ return n>800 && n<1500});
console.log(ranges);

const nam= names.filter((n)=>{ return n.length<=5});
console.log(nam);

const strPrice = ['₹56.90','₹780.892','₹190.6','₹90.8','₹120.9'];
const intPrice = strPrice.map((n)=>{return parseInt(n.slice(1))});
console.log(intPrice);