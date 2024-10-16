const car = new Object({
    name:"myse",
    color:"green",
    speed:50,
    brake: function(){
    console.log("third methd of car ");
    },
    drive (){
    console.log("fourth method of car");
    }
    });
    function stop(){
    console.log("second method of car");
    }
    car.stop=stop;
    console.log(car);
    car.brake();
    car.drive();
