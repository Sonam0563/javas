console.log("This is strings tutorial")
let a = "Harry";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);

console.log(a.length)

let real_name = "Harry"
let friend = "Rohan"
console.log("His name is " + real_name + " and his friends name is " + friend)
console.log(`His name is ${real_name} and his friends name is ${friend}`)

let b = "vinam"
console.log(b.toUpperCase())
console.log(b.toLowerCase()) 
console.log(b.length) 
console.log(b.slice(1, 5)) //not effect the original one and same as splice it change the original one
console.log(b.slice(1)) 

console.log(b.replace("vi", "77"))
console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"))

console.log(b)