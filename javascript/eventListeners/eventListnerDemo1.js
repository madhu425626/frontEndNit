let count = 1
//dynamically elements
const container = document.querySelector('.container');

        container.addEventListener('click',() => 
        {
            const newContainer = document.createElement('div'); //create element
            newContainer.classList.add('card');     // add card class
            newContainer.textContent = 'newcard'; //name
            newContainer.textContent = count;      //display count
            count = count + 1;                                //count
            container.append(newContainer); //
           // console.log(newContainer);
           

        })
