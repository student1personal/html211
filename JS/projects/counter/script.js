let c = 0;
const para= document.getElementById('count')
function incr ()
{
    c++; // increase c by 1
    para.textContent = c;
}
function decr ()
{
    if (c <= 0)
    {
        alert("value cannot be less than zero")
    }
    else
    {
        c-- // decrease c by 1
				para.textContent = c
    }
}
function reset ()
{
    c = 0 // make c zeo
    para.textContent = c
}
