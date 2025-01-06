// array declaration
// let myarray[]; blank array

//array with data
let numbers = [1, 2, 3, 4];
let mixedarray=["Text", 42, true];
//console.log(numbers , mixedarray);

//how to acceses array 
let colors=["red" ,"green" ,"blue"];

console.log(colors[0]);
console.log(colors[2]);


//array modify

//value update
// let colors=["red" ,"green" ,"blue"];
colors[1]="yellow";
console.log(colors[1]);

//add new item
colors.push('purple');
console.log(colors);

//arrays normal methods 

// 1.push()
// add new items to the end of an Array
let arr=[1, 2, 3];
arr.push(4);
console.log(arr);

// 2.pop()
// delete an item from the very end of an Array 
// let arr=[1, 2, 3, 4];
arr.pop();
console.log(arr);

//3.shift()
//first item will be deleted 
//let arr=[1, 2, 3];
arr.shift();
console.log(arr);

/* 4.unshift
add an item in the place first item
*/
arr.unshift(1);
console.log(arr);

//5.length
//total length of the array
console.log(arr.length);

//6.splice
arr.splice(0, 0, 0);
console.log(arr);

//7.slice
let subArray= arr.slice(0, 3);
console.log(subArray);


//ARRAY LOOPING

//1.for loop
for (let i= 0; i<9; i++){
    console.log(i);
}

// 2.for ...... of loop

for (let item of arr ){
    console.log(item);
}

//3.forEach();
arr.forEach((item)=>{
    console.log(item);
});

//work with array 
// 1.indexing of a items 
let number =[1, 2, 3, 40];
let index =number.indexOf(40);
console.log(index);

//2.includes()
console.log(number.includes(35));
console.log(number.includes(3));

//reversed array
let reversed =[number.reverse()]
    console.log(reversed);

    // console.log(number.reverse()); EASY WAY
