var p1={
    name:"mahesh",
    address:"yvl",

hi:function(){
   // return this.name+"\t"+this.address;
    console.log(this.name+"\t"+this.address);

}
}
var p2={
    name:"mouni",
    address:"ndl",

}
var t=p1.hi.bind(p2);

//var k=p1.hi.bind(p1);


//k();
// bind help us to borrow the method from one object to another object
t();
//console.log(p1.hi.bind(p2));
