// Get Element
const output = document.getElementById("output")

// Normal Function
function mult(){
  number = parseInt(prompt("Enter a number:"))
  let msg = "<br>"

  for(let a = 0; a <= 10; a++){
    msg += `${number} * ${a} = ${number * a} <br>` 
  }

  output.innerHTML = msg
}

// Expression Function
const mult1 = function(){
  number = parseInt(prompt("Enter a number:"))
  let msg = "<br>"

  for(let a = 0; a <= 10; a++){
    msg += `${number} * ${a} = ${number * a} <br>` 
  }

  output.innerHTML = msg
}

// Arrow Function
const mult2 = () => {
  number = parseInt(prompt("Enter a number:"))
  let msg = "<br>"

  for(let a = 0; a <= 10; a++){
    msg += `${number} * ${a} = ${number * a} <br>` 
  }

  output.innerHTML = msg
}

const clearTable = () => {
  console.log("Multiplication Table is clean")
  output.innerHTML = ""
}