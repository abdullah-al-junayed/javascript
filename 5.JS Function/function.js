// function declaration & call
function greet(name){
    return "hello " + name + " !" ;
}
console.log(greet("junayed")); // hello junayed !


// function return value
function addNumber(a,b){
    return a*b;
}
console.log(addNumber(2,4)); // 8


// Arrow function
const hello = (nam) => "hello "+nam+ " !";
console.log(hello("everyone")); // hello everyone !


// Anonymous function 

// not understand :(


// immediatly invoked function expression
(function(){
    console.log("hello world!");
})(); // hello world!



//default parameter value 

function ans(a, b=69){
    return (a*b);
}
console.log(ans(5)); //345

//Reset parameters
function sum(...Numbers){
    return Numbers.reduce((total, num) => total + num ,0 );

}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));  //45



//callback function

function user(callback){
    const name = "junayed";
    callback(name);
}

user(function(name){
    console.log("Hello " + name +" !");
});  //Hello junayed !

//Higher order function
function higherOrder(fn){
fn();
}
higherOrder(()=>console.log("this is higher order function!"));

//function scope and closure

//scope
function testscope(){
    let x = 10;
    console.log(x);
}
testscope();

// closure
function outer (){
    let count = 0;
    return function inner (){
        count++;
        return count;
    }
}
const counter = outer();
console.log(counter());
console.log(counter());
