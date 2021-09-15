function FullName(name,surname) {
    this.name = name,
    this.surname = surname
}
 
const person = new FullName("Anya", "Kosyan");
const personStr = Object.values(person).join(" ")
let tagName = document.getElementById("person-name")
let counter = 0
let addText = setInterval(function(){
   
    tagName.textContent += personStr[counter]
    counter++
  if(counter === personStr.length) {
      clearInterval(addText)
  }
}, 200);
