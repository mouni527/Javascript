var p1={
    name:"mahesh",
    address:"yvl",

hi:function(phone,pin){
    return this.name+"\t"+this.address+"\t"+phone+"\t"+pin;

}
}
var p2={
    name:"mouni",
    address:"ndl",

}
// the main purpose of using the calll function is to reuse the existing object resources which have the same structure for both(like methods)
var arr=["9964563782","876435"]
console.log(p1.hi.call(p2,arr[0],arr[1]));