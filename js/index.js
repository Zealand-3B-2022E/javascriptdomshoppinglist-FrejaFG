//Write your Javascript code here
console.log("Shoppinglist")


let myElement1 = document.getElementById("1")
console.log(myElement1)

let myElement2 = document.getElementsByTagName("li")
console.log(myElement2)

let myElement3 = document.getElementsByClassName("healthy")
console.log(myElement3)

let myElement4 = document.getElementsByClassName("unhealthy")
console.log(myElement4)

let list = document.getElementsByTagName("li")
console.log(list)

for (let index = 0; index < list.length; index++) {
    const element = list[index];

    //console.log(element)

}

let myElement5 = document.getElementById("2")
console.log(myElement5)

let newLielement = document.createElement("li")



// Adding Eventlistener
// tilføj ny usund vare
document.getElementById("addButton").addEventListener("click", addItems)

// Input feltet!!
let elementInput = document.getElementById("newItems")

function addItems(e) // funktionens navn skal være det samme som parameteren i addEventListener!!!
{
    console.log("Add item Function")
    let InputText = (elementInput).value
    console.log("The registered text is :" + InputText)

    let listUnhealthy = document.getElementById("listUnhealthy")
    let newLi = document.createElement("li")
    let newText = document.createTextNode(InputText)
    newLi.appendChild(newText)
    newLi.setAttribute("class", "unhealthy")

    listUnhealthy.appendChild(newLi)

}





