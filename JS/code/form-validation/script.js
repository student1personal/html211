const passwordInput = document.getElementById('pwd')
const eyeIcon = document.getElementById("eyeIcon")
function reveal ()
{
    if (passwordInput.type == "password")
    {
        passwordInput.type = "text"
        eyeIcon.classList.remove("fa-eye")		 
		 eyeIcon.classList.add("fa-eye-slash")
    }   
    else
    {
        passwordInput.type = "password"
        eyeIcon.classList.remove("fa-eye-slash")
        eyeIcon.classList.add("fa-eye")
        }
       
}
function formSubmit (e)
{
    e.preventDefault();
    console.log(passwordInput.value.length)
    if (passwordInput.value.trim() == "")
    {
        document.getElementById("pwderrorMsg").textContent="please Enter Password"
    }
    if (passwordInput.value.length<=8)
    {
        console.log("hello")
        document.getElementById("pwderrorMsg").textContent="please enter minimum 8 characters"
    }
}
