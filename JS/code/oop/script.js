// let obj = {
//     name: "prasad",
//     age: 28,
//     printt: function ()
//     {
//         console.log("hi")
//     }
// }
// obj.printt()
class student
{
    name; age;
    constructor(n,a)
    {
        this.name = n;
        this.age = a;
        /* this - current calling object */
    }
    display ()
    {
        console.log(this.name)
    }
}
let s1 = new student("rajesh","50")
console.log(s1.name);
class Topper extends student //inheriting student class to Topper class
{
    rank;
    constructor(n, a, r)
    {
        super(n,a)
        this.rank = r;//x.rank=1
    }
}
let x = new Topper("raj",25,1)
console.log(x.name)
