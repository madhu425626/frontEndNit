const container = document.querySelector('.container');

        container.addEventListener('click',() => 
        {
            const newContainer = document.createElement('div')
            newContainer.classList.add('card');
            container.append(newContainer);
            console.log(newContainer);
        })
