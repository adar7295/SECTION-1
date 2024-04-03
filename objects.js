const user= {name:'raju', email:'raju@mail.com',password:'dlsllsl'};
console.log(user);
console.log(user.email);
console.log(user['password']);

let key='name';

console.log(user[key]);


user.password ="something";
console.log(user);
user.address ="Lucknow";
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));

const smartphone ={
    brand:'samsung',
    model:'s24',
    price:1200000,
    color:['white','black','blue']

};

console.log(smartphone.price);
console.log(smartphone.color);
console.log(smartphone.color[1]);
console.log(smartphone.color[1][3]);

const smartphonelist= [
    {brand:'samsung', model:'s24', price:1200000, color:['white','black','blue']},
    {brand:'apple', model:'iphone', price:150000, color:['black','blue']},
    {brand:'oneplus', model:'nord ce 3', price:20000, color:['grey','white']},
    {brand:'redmi', model:'note 8 pro', price:16000, color:['white','blue']},
    {brand:'samsung', model:'z fold', price:164000, color:['white']}
    

]

console.log(smartphonelist.length);
console.log(smartphonelist[0].model);
console.log(smartphonelist[3].price);
console.log(smartphonelist[0].color[1]);
console.log(smartphonelist[4].color[1]="black");
console.log(smartphonelist[4]);

smartphonelist[4].color.push('red');
console.log(smartphonelist[4]);
