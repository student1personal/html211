const input = document.getElementById('inp')
const bucketDiv = document.getElementById("bucket");
const bucketList=[]
function add ()
{
    if (input.value.trim() == '')
    {
        alert("please add something")
    }
    else
    {
       bucketList.push(input.value)
				displayData() 
    }
    
    input.value = ""
}
function displayData ()
{
    bucketDiv.textContent=''
     bucketList.forEach((li, i) => {
				const listItem = document.createElement("li")
				listItem.classList.add("listItem")
				const para = document.createElement("p")
				para.textContent = li
				const deleteButton = document.createElement("button")
				deleteButton.onclick = function () {
					bucketList.splice(i, 1)
                    displayData();
				}
				deleteButton.textContent = "❎"
				listItem.append(para, deleteButton)
				bucketDiv.appendChild(listItem)
			})
}
