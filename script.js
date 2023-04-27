// ADDING ELEMENTS TO PAGE
// - Two ways:

// const body = document.body
// body.append("Hello World")

// body.appendChild("Hello World") // will return an error to console, bc appendChild requires a node and not a string 

// body.append("Hello World", "Bye") // can append multiple things at a time 

// // append can append anything, appendChild can only append nodes (not strings)
// // append can append multiple things at a time, appendChild can only append one thing at a time 

// // CREATING ELEMENTS

// // Step 1: Create Element
// const div = document.createElement('div')

// //Step 2: Add Element to HTML 
// body.append(div)

// //Step 3: Add text to div
// div.innerText = "Hello World"
// div.textContent = "Hello World 2"

// // text content prints everything including spacing and indentation, innerText only displays the text that is on our page


// // Change styling of element (Bold)
// const strong = document.createElement("strong")
// strong.innerText = "Hello World 2"
// div.append(strong)

// -------------------------------------------------
const body = document.body
const div = document.querySelector('div')
const spanHi = document.querySelector('#hi')
const spanBye = document.querySelector('#bye')

// How to remove an element:
spanBye.remove()

div.removeChild(spanHi)

// How to add an element:
div.append(spanBye)

// Modify Attributes of an Element
console.log(spanHi.getAttribute("id"))
console.log(spanHi.getAttribute("title"))

console.log(spanHi.setAttribute("id", "sdfsdfsd"))
console.log(spanHi.setAttribute("title", "sdfsdfsd"))

spanHi.removeAttribute("id")

// Modify Data Attributes
console.log(spanHi.dataset)
console.log(spanHi.dataset.longerName)
// set new property:
spanHi.dataset.newName = "hi"


// Modify Element Classes 
spanHi.classList.add('new-class')
spanHi.classList.remove('hi1')
spanHi.classList.toggle('hi3') // will either remove class if it exists already, or add class if it doesnt exist

spanHi.classList.toggle('hi3', true) // will add the class if true, will remove class if false


// Modify Element Style 
spanHi.style.color = "red"
spanHi.style.backgroundColor = "yellow"





