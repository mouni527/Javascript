function f1(a){
a();
}
f1(function(){
    console.log("hi");

})


function sample(){
    console.log(c);
    console.log("child function");
}
    return sample;
var inner=m('abc','def');
inner();

function f1(a){
a();
console.log(a);
}
f1(function(){
console.log("Passing a Anonymous Function as argument to f1 Function");
})
