function foo(){
    let b=1;
    function inner(){
        console.log(b);
        return b;
    }
    return inner;
}
 let greet=foo();
 console.log(greet());
 

 /*function outer() {
    let counter = 0;
    return function inner() {
    counter++;
    return counter;
    };
    }
    const increment = outer();
    console.log(increment());*/