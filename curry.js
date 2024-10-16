function add(a,b,c){
    return a+b+c;
}
console.log(add(7,7,3));

function curriedFunction(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(curriedFunction(1)(7)(3));



//currying function means  it having multiple arguements in sequence manner
