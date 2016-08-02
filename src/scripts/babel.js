/**Add your code, here!**/

let mul = (x, y = 1) => x * y; 

class Vehicle
{
    constructor(owner,numDoors,numTires){
        this.owner = owner;
        this.numDoors = numDoors;
        this.numTires = numTires;       
    }

    render() {
        return `The ${this.owner}'s vehicle has ${this.numDoors} door(s) and ${this.numTires} tires`;
    }
}

class Car extends Vehicle
{
    constructor(owner,numDoors,numTires,color,price){
        super(owner,numDoors,numTires);
        this.color = color;
        this.price = price;
    }

    render(){
        return `${super.render()}. Also it is ${this.color} and its cost is USD ${this.price}`;
    }
}

class Lorry extends Vehicle
{
    constructor(owner,numDoors,numTires,lorryload){
        super(owner,numDoors,numTires);
        this.lorryload = lorryload;
    }

    render(){
        return `${super.render()}. Also it can load ${this.lorryload} tons`;
    }
}