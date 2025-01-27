// ES6 features - Ecmascript

//template literal
let x = 25;
console.log(`the value of x is ${x}`)

//function vs function expression vs arrow function
// function fun ()
// {
//     console.log("hi")
// }
// function expression
// const fun = function ()
// {
//      console.log("hi")
// }
// arrow function
// const fun = () => console.log("hi")

//default parameter
// function fun2 (a, b=20)
// {
//     console.log(a+b)
// }
// fun2(5)

// rest and spread
// function fun3 (a,x,y, ...b)
// {
//     console.log(b)//[9,1,4,3]
//     console.log(...b)
//     console.log(a+x+y+b[0]+b[1]+b[2])
// }
// fun3(1, 2, 2, 3, 1, 1)

// function fun3 (a, ...b)
// {
//     console.log(a,b)
//     let arr = [a, b]
//     //[1,[2,3,4]]
//     console.log(arr)
//     let arr1 = [a, ...b]
//     //[1,2,3,4]
//     console.log(arr1)
// }
// fun3(1,2,3,4)



// destructuring
//array 
let arr = [5, 6, 7, 8]
// b=arr[1]
let [a, b, c, d] = arr;
console.log(b)

//object
let obj = {
    name: "prasad",
    age:28
}
console.log(obj.name)
//let x= obj.name
let { name,age } = obj;
console.log(age)

function display (n)
{
    console.log(`Hello ${n}`)
}
export {display}
export default age;
