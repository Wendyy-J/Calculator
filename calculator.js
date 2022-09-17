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

 function mathcos() {
     let x = document.getElementById('result').value
     let y = Math.cos(x);
     document.getElementById('result').value= y
     return y
 }

 function mathsin() {
     let x = document.getElementById('result').value
     let y = Math.sin(x);
     document.getElementById('result').value= y
     return y
 }
 
 function sqrt() {
     let x = document.getElementById('result').value
     let y = Math.sqrt(x);
     document.getElementById('result').value= y
     return y
 }

 function mathtan() {
     let x = document.getElementById('result').value
     let y = Math.tan(x);
     document.getElementById('result').value= y
     return y
 }

 function mathlog10() {
     let x = document.getElementById('result').value
     let y = Math.log10(x);
     document.getElementById('result').value= y
     return y
 }

 function pow() {
     let x = document.getElementById('result').value
     let y = Math.pow(x, 2);
     document.getElementById('result').value= y
     return y
 }

 function mathlog() {
     let x = document.getElementById('result').value
     let y = Math.log(x) ;
     document.getElementById('result').value= y
     return y
 }

 function exp() {
     let x = document.getElementById('result').value
     let y = Math.exp(x);
     document.getElementById('result').value= y
     return y
 }
