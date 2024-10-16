/*function add(n1,n2){
    return n1+n2;
}
console.log(add(2));*/



function add(a,b,...rest){
    console.log(rest);
    return a+b;
}