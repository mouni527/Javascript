var str="xcyg";
var patt=/x[abc]y/;
console.log(patt.test(str));


var tes="123abc";
var pat=/[a-z,0-9]/;
console.log(pat.test(tes));


var tes="123hbc";
var pat=/[a-z]/;
console.log(pat.test(tes));

var mail="monikamini659@gmail.com";
var patty=/@gmail.com/;
console.log(patty.test(mail));




var s="@#$%^j";
var t=/\w/;
console.log(t.test(s));



var s="@#$%^";
var t=/\w/;
console.log(t.test(s));


var str="monikamini8907i.com";
var p=/[A-Z]{1,}[a-z]{1,}[0-9]*\W