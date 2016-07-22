# A ES2015 Tutorial With Babel & Gulp #

##What is Babel?##

Basically, Babel is a ECMAScript 6 to ECMACScript 5 compiler. This tools allows to use
ES6 features in our projects. The process is simple, firstly, you shoul learn about new
standar, such as let and const vars, arrow functions, classes, template string, default
values and modules. Secondly, prepeare a task with **gulp** and **gulp-babel** 
(see more later) and finally use **browserSync**

> This repositories is a fork from https://github.com/AFelipeTrujillo/A.GulpJS.Tutorial

##Waht is GulpJS?##

More: https://github.com/AFelipeTrujillo/A.GulpJS.Tutorial

##Installation##

```
git clone http://
npm install
gulp
```

##ES6 Feature##

### Let and Const vars###
Now, we can declarate variables with **let** instead of **var**. 
Next code generates an error, because *x* is defined into IF block so it is
inaccessible in others scopes. 

ES6 Code:
```
(
	function(){
		console.log(x);
		if(true){
			let x = 'Hello Let !';
		}
		console.log(x);		
	}
)();
```

Compiled Code:
```
'use strict';

(function () {
	console.log(x);
	if (true) {
		var _x = 'Hello Let !';
	}
	console.log(x);
})();
```
Also, we can create constant variables, with reserved word **const** which 
you can only read in time execution and cannot modify. Let's play.

ES6 Code:
```
(
	function(){
		const PI = 3.15;
		PI = 2;		
	}
)();
```

Compiled Message:
```
scripts.js: "PI" is read-only
```

###Arrow Functions##
This feature help us in create code clearer and cleaner than the past. Next
function takes two arguments (numbers) and sum.

ES6 Code:
```
let sum = (x,y) => x + y;
```

Compiled Code:
```
var sum = function sum(x, y) {
    return x + y;
};
```

Other example:

ES6 Code
```
var a = [
    "Hydrogen",
    "Helium",
    "Lithium",
    "Beryl­lium"
];
		
var aLength = a.map(s => s.length)
```

Compiled Code:
```
var a = ["Hydrogen", "Helium", "Lithium", "Beryl­lium"];

var aLength = a.map(function (s) {
    return s.length;
});
```

More info: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/Arrow_functions

###Clases###

With ES6, we can use classes almost the same to ES5 contruct functions. Also,
we will be able to use inheritance with **extends**.

```
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
```

Test Code:
```
var c = new Car('Andres',4,4,'yellow',4000);
c.render();
```
###Template Strings###

With ES6, we can interpolate strings much simpler and better. Look
the next example:

ES6 Code:
```
let h = 'Hi';
let w = 'World!';

console.log(`I just wanna say ${h} ${w}`);
``` 

Compiled Code:
```
'use strict';

var h = 'Hi';
var w = 'World!';

console.log('I just wanna say ' + h + ' ' + w);
```

###Destructuring###

Now, we can get new ways to assing values to Array
and Objects.

ES6 Code:
```
let [a,b] = ['Javascript','Rocks']

let hero = {name : 'Han', lasname : 'Solo'}
var { firstName, lastName } = hero;

let fn = () => {
	return ['Dark','Vader']
}

let sith = fn();
```

Compiled Code:
```
'use strict';

var a = 'Javascript';
var b = 'Rocks';


var hero = { name: 'Han', lasname: 'Solo' };
var firstName = hero.firstName;
var lastName = hero.lastName;


var fn = function fn() {
	return ['Dark', 'Vader'];
};

var sith = fn();
```

###Default Values###
