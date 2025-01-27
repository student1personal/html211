// console.log(document)
// console.log(document.getElementsByTagName('h1')[0])
// console.log(document.getElementsByClassName("heading")[0])
// console.log(document.getElementById("myEle"))
// console.log(document.querySelector('.heading'))
// console.log(document.querySelectorAll(".heading"))
let myHeading = document.getElementById("myEle");
console.log(myHeading.textContent)
const count = document.getElementById('count')//<span>
let c = 0;
function change ()
{
    if (c < 20)
    {
			c++ //1
        count.textContent = c //1;
        myHeading.textContent="prasad"
		}
}
function change2 ()
{
    c--;
    count.textContent = c
}
