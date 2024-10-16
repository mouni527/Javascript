function func(fname,lname,country){
    return "my name is"+fname+" "+lname+" and "+country+" is my favourite country";

}
console.log(func("mounika","chakali","india"));

//string interpolation (the difference is to ovrcome  the string concatination and white spaces but in string interolatio we use backticks and espressions)
function func(fname,lname,country){
    return `my name is ${fname},${lname},${country} is my favourite country`
}
console.log(func("mounika","chakali","india"));