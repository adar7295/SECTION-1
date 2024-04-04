const smartphonelist= [
    {brand:'samsung', model:'s24', price:1200000, color:['white','black','blue']},
    {brand:'apple', model:'iphone', price:150000, color:['black','blue']},
    {brand:'oneplus', model:'nord ce 3', price:20000, color:['grey','white']},
    {brand:'redmi', model:'note 8 pro', price:16000, color:['white','blue']},
    {brand:'samsung', model:'z fold', price:164000, color:['white']}
    

]

//find phoones with price less than 50000
const price=smartphonelist.filter((n)=>{return n.price<50000});
console.log(price);
console.log('---------------');

//filter all samsung phones
const sam = smartphonelist.filter((c)=>{return c.brand==='samsung'});
console.log(sam);

console.log("---------------");
//color blue
const colors= smartphonelist.filter((b)=>{return b.color.includes('blue')});
console.log(colors);

//arrray of phone brands
const brands= smartphonelist.map((m)=>{return m.brand});
console.log(new Set(brands));

//arrray of phone models
const models= smartphonelist.map((m)=>{return m.model});
console.log(models);

