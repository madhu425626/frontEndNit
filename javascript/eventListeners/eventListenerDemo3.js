//preventing default event of generic elements
//event given for parent element form.
//it is firing even we accessing the child oof it called BUBLING, CAPTURING

let form = document.querySelector('form');
form.addEventListener('submit',(e) =>
{
e.preventDefault();
})

form.addEventListener('submit',(e) =>
    {
        e.preventDefault();
        console.log(e);
    const myFormData = new FormData(form);

    for(const p of myFormData.entries())
    {
        console.log(p);
    }
})
