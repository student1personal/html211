/* print numbers from 1 to 10 */
// console.log("1")
// console.log("2")
// console.log("3")
// console.log("4")

// Loops: loops will repeat again and again. each repitition is called iteration

let a = 10;
while (a >= 1)
{
    console.log(a);
    a--;
}
/* take a string of anyname and print ited even Numbered string
Eg: "PRASAD"  --->RSD*/
let str = "PRASAD", i = 0,str1='';
while (i < str.length)
{
    if ((i + 1) % 2 == 0)
        str1 = str1 + str[i]
    i++;
}
