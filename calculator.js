// write a function to display values
 function display(val){
     document.getElementById('result').value += val

     return val
 }

 // write a function perform arithmetic operations
 function solve() {
     let x = document.getElementById('result').value
     let y = eval(x);
     document.getElementById('result').value = y

     return y
 }

 function clearscreen() {
     document.getElementById('result').value=''
 }