// math.PI
console.log(Math.PI);

// Math.round()
console.log(Math.round(6.9));

// Math.floor()
console.log(Math.floor(6.6));

// Math.ceil()
console.log(Math.ceil(3.4));

// Math.trunc()
console.log(Math.trunc(4.9));

// Math.sqrt()
console.log(Math.sqrt(16));

// Math.cbrt()
console.log(Math.cbrt(27));

// Math.pow()
console.log(Math.pow(9,2));

// Math.abs()
console.log(Math.abs(-9.999));

// Math.min and math.max 
console.log(Math.min(70,90,20));
console.log(Math.max(10,9,60));

// Math.random()
console.log(Math.random());

// Math.log() and Math.log10()
console.log(Math.log(1));
console.log(Math.log10(100));

// Math.sin , Math.cos, Math.tan 
console.log(Math.sin(90));
console.log(Math.cos(90));
console.log(Math.tan(90));

// Math.sign()
console.log(Math.sign(5))
console.log(Math.sign(-5))
console.log(Math.sign(0))

// Some Real World Example
// Get 1-10 random number
let randomNum = Math.floor(Math.random() * 10) + 1 ;
console.log(randomNum);

// The area of a circular field
let radious = 15;
let area = Math.PI * Math.pow(radious,2);
console.log(area);

// differance of two number
let differance = Math.abs(10-15);
console.log(differance);
