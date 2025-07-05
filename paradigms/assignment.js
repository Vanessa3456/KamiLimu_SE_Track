// NAME: Vanessa Paul ,
// Date: 5th July,2025
// TODO:OPP
class Circle{
    constructor(radius){
        this.radius=radius;
    }
    getCircumference(){
        return 2*Math.PI* this.radius
    }
}

const circumference= new Circle(5.0);
console.log(circumference.getCircumference());

// TODO: Functional Programming
// const pure=(radius)=>2*3.142*radius;
const radii=[3,4,5];
const circumference2=radii.map((radius)=>2*3.142*radius);
console.log(circumference2);

// TODO: Apply and reflect
class TODO{
    constructor(tasks){
        this.tasks=tasks;
    }
    addTasks(){ 
               
    }
    markComplete(){

    }
    pending(){

    }
}