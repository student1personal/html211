// let arr = ["raj", "john", "vani", "batul"]
// console.log(arr[3])
// let arr2 = [5, 4, 2, 1, 3]
// console.log(arr2[0] * arr2[3]) //5*1=5
// console.log(arr2.length) //5
// console.log(arr[10]) //undefined
// arr[1000] = 25;
// console.log(arr.length)
// arr.length = 2;
// console.log(arr.length, arr) //2 ["raj","john"]
// arr.length = 3
// console.log(arr.length, arr)



let arr = [7, 6, 4, 8, 3];
console.log(arr.length)//5
// arr.length = 3;
arr=[1,2]
arr.push(15,14,13,12,11) 
console.log(arr)//[1,2,15,14,13,12,11]
arr.pop()
arr.shift()
console.log(arr)//[2,15,14,13,12]
arr.unshift(5,4)
console.log(arr)//[5,4,2,15,14,13,12]
arr.splice(2);
arr = [5, 4, 3, 2, 1]
arr.splice(2, 2);
console.log(arr) //[5 4 1]
arr.splice(2, 0, 1, 2, 3);
console.log(arr) // [5 4 1 2 3 1]

arr = ["raj", "jaya", "john"]
arr.splice(1,0,"x","y","z") //["raj", "x","y","z", "jaya", "john"]


let friends = ["penny", "ross", "rachel", "chandler", "monica", "sheldon"]

// 1. remove penny and add pheobe
friends.shift();
friends.unshift("pheobe")
// 2. remove sheldon and add joey
friends.pop();
friends.push("joey")
// 3. between ross and rachel add justin
friends.splice(2,0,"justin")

arr = [3, 4, 5];
arr.forEach(function (ele, ind) {
	console.log(ele * ele, ind)
})

arr = ["raj", "john", "sheob", "shekhar"]
arr.forEach(function (ele,ind)
{
    console.log(ele.charAt(0))
})
// return values as even or odd in new array
arr = [1, 2, 3, 4, 5]
let arr2= arr.forEach(function (ele)
{
    return ele % 2 == 0;
})
console.log(arr2);
let arr3 = arr.map(function (ele) {
	return ele % 2 == 0
})
console.log(arr3)
let arr4 = arr.filter(function (ele) {
	return ele % 2 == 0
})
console.log(arr4)


arr = [1, 2, 3, 4, 5];
arr=[1,2,3,4,5]
let arr5=arr.some(function (ele,ind)
{
    return ele % 2 == 0;
})
console.log(arr5)
arr=[6,7]
let arr6 = arr.every(function (ele, ind) {
	return ele % 2 == 0
})
console.log(arr6)
arr=[1,2,3,4,5]
let arr7 = arr.find((ele, ind)=>ele % 2 == 0)
console.log(arr7)

// reduce
//reduce is used for accumulated values
// (values which considers previous values)
arr=[1,2,3,4,5]
let result = arr.reduce(function (prev,curr)
{
    return prev + curr;
},0)
console.log(result)
