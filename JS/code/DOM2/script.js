const headEle = document.getElementById('myHeading')
console.log(headEle.textContent)
console.log(headEle.innerText)
// const colors= ["black","white","green","yellow","purple","orange","violet","grey"]
function fun ()
{
    // headEle.innerHTML =
    //     '<b>prasad</b><img src="https://www.partysuppliesindia.com/cdn/shop/products/A3_43_fa283d51-14fb-4704-b57c-5ef5290f5a02.jpg?v=1735572737&width=1500" alt="shinchan" height="50">';
    headEle.textContent = "prasad"
    headEle.style.fontWeight="bold"
    headEle.style.color = "white";
    const ri = Math.floor(Math.random() * 255)
    const ri1 = Math.floor(Math.random() * 255)
    const ri2 = Math.floor(Math.random() * 255)

    console.log(ri) //5
    document.body.style.backgroundColor = `rgb(${ri},${ri1},${ri2})`

}
