//accessing the text from input and displaying in para by parameter e. e.target.value

const  para = document.querySelector('p');
const userInput = document.querySelector('input');


userInput.addEventListener('input',(e) => 
{
    console.log(e.target.value);
   
    para.innerText = e.target.value;
})
