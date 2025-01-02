//Example for single line comment
/* This is multi
 line comment */
console.log("Welcome JS")
function fun ()
{
   
    if (true)
	{
		;
		var x = 25
		var x = 9 /* we can redeclare */
        x = 35   /* we can reassign */
    }
    console.log(x)
}
fun()
function fun2() {
	if (true) {
		let x = 25
		/*let x = 90 /* we cannot redeclare */
		x = 35 /* we can reassign */
	}
	console.log(x) /* error , x is not defined */
}
fun2()
function fun3() {
	if (true) {
		const x = 25
		/*const x = 90 /* we cannot redeclare */
		/*x = 35 /* we cannot reassign */
	}
	console.log(x) /* error , x is not defined */
}
fun3()
