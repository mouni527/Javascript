var c=function add(e,f){
    var b=e+f;
    console.log(b);
    console.log("________________");
    function si(){
        console.log(b);
        console.log("cccccccccc");
    }
    return si();
}
c(100,200);