const add=(a,b)=>a+b;
console.log(add(2,3));

const square=x=>x*x;
console.log(square(6));

const greet=()=>console.log("hello");
greet();

const person=(name,age)=>({name,age});
console.log(person('john',30));

 

//aim of map is  it will create  new array  and 
const numbers=[1,2,3,4,5];
 const dout=numbers.map(num=>num%2==0);// it will giving  all values same length
 console.log(dout);


 const name=[1,2,3,4,5];
 const event2=name.filter(sim=>sim%2==0);   // it will give 
 console.log(event2);









