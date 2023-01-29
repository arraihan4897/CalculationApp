const num1 = Math.ceil(Math.random() *10);
const num2 = Math.ceil(Math.random() *10);



const Qel1 = document.getElementById('tid');
Qel1.innerText= `what is ${num1} multiplied by ${num2}`;






const button = document.getElementById("myButton").addEventListener("click", function() {
   let input = document.getElementById("myInput");
   const inputValue = parseInt(input.value) ;
  console.log(inputValue);
  const getres = num1*num2;
console.log(getres);

  if (inputValue===getres) {
   alert("yeaaaaaaa");
}
else{

   alert("wrong");
} 

input.value= ""


});