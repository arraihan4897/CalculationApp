const num_1 = Math.ceil(Math.random() *1000);
const num_2 = Math.ceil(Math.random() *10);



const Qel_1 = document.getElementById('did');
Qel_1.innerText= `what is ${num_1} divide by ${num_2}`;
console.log(num_1,num_2,Qel_1,'will be displayed');






const buttond = document.getElementById("myDButton").addEventListener("click", function() {
   let input = document.getElementById("mydivideInput");
   const inputValue = parseInt(input.value) ;
  console.log(inputValue);
  const getres = num_1/num_2;
console.log(getres);

  if (inputValue===getres) {
   alert("yeaaaaaaa");
}
else{

   alert("wrong");
} 

input.value= ""


});