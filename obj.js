const car = new Object({
    name:"mys",
    color:"green",
    speed:40
    });
    function stop(){
    console.log("second method of car");
    }
    car.stop=stop;
    console.log(car);


    