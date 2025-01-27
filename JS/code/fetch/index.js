function getData ()
{
    document.body.textContent='' // remove previous quote
    fetch("https://dummyjson.com/quotes/random") // fetch returns promise
        .then((res) => res.json())// if promise resolve and it returns new promise
        .then((data) => // if new promise resolve
        {
            console.log(data) // print the data in link
            const quoteEle= document.createElement('h1');
            quoteEle.textContent = data.quote;
              const authorEle = document.createElement("p")
            authorEle.textContent = data.author
            document.body.append(quoteEle,authorEle)
        })
        .catch((err) => console.log(err)) // if any of promises failed
}
setInterval(getData,5000)
