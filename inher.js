

//protype inheritance
const Parent={
    name:'Parent',
    greet: function(){
    console.log( "Hello my name is ",this.name );
    }
    };
    // child object
    const Child=Object.create(Parent);
    Child.name='Child';
    Child.greet();

    Parent.greet();



    //classical inheritance
    class Animal
    {
        constructor(name){
            this.name=name;
        }
        eat(){
            console.log(`${this.name},is eating`);
        }


    }
    //child class
    class Dog extends Animal{
        bark(){
            console.log(`${this.name} is dancing`)
        }
    }
    const obj=new Dog("puppy");
    obj.eat();
    obj.bark();




    
function Parent(name){
    var  obg={};
    Object.sayhello=
    
}
var childobj=Child('moni','22');
childobj.sayhello();
childobj.saygoodbye();
console.log("name")

