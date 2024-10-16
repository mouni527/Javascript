var c1={
    name:"Mouni",
    country:"India",
    getinf:function(address,pincode,hno){
        return this.name+"\t"+this.country+"\t"+address+"\t"+pincode+"\t"+hno
    }

}
var c2={
    name:"lakshmi",
    country:"pakistan",

}
var arr=["yvl",1234,"3-75"]
//the main purpose of using this apply function is it will split the array automatically but in call give the index values to paramaters
console.log(c1.getinf.apply(c2,arr));
//console.log(c1.getinf .call(c2,arr[0],arr[1],arr[2]))