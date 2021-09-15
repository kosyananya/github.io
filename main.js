function FullName(name,surname) {
    this.name = name,
    this.surname = surname
}
 
const person = new FullName("Anya", "Kosyan");
const personStr = Object.values(person).join(" ")
let h2 = document.getElementsByClassName("person-name")
// function addName(name) {
//     for(let key in name) {
//         setTimeout(function f(name) {
//             tagName.textContent += name[key]
//         },500)
//     }
    
// }

// addName(personStr)

h2.innerHTML = ""

// for(let key in personStr) {
//         tagName.textContent += personStr[key]
// }
