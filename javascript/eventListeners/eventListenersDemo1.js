const container = document.querySelector('.container');

        container.addEventListener('click',() => 
        {
            const newContainer = document.createElement('div')
            newContainer.classList.add('card');
            container.append(newContainer);
            console.log(newContainer);
        })


const input = document.querySelector('#input');

//adding onclick event on input event.
input.addEventListener('click',function()
{
    const userClick = document.createElement('span'); //span created onclick and displays in console

    console.log(userClick);
})
