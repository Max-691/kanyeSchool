let addButton = document.getElementById('add');
let ul = document.getElementById('list');

addButton.addEventListener("click", function(){
    fetch('https://api.kanye.rest/')
    .then((response) => response.json())
    .then((data) => {    
        const li = document.createElement('li')
        ul.appendChild(li);
        li.textContent= data.quote;
        li.classList.add('liborder')
        //add of up/down buttons
        const upButton = document.createElement('button');
        li.appendChild(upButton)
        upButton.classList.add('button_style')
        upButton.textContent="UP";
        upButton.addEventListener("click", function(){
            const previousNode = li.previousElementSibling;
            previousNode.insertAdjacentElement("beforebegin", li);
        })

        const downButton = document.createElement('button');
        li.appendChild(downButton)
        downButton.classList.add('button_style')
        downButton.textContent="DOWN";
        downButton.addEventListener("click", function(){
        const nextNode = li.nextElementSibling;
        nextNode.insertAdjacentElement('afterend', li)
        })
    })
    .catch(err => {console.log('Request Failed:', err)})
    
})
// à cahque fois que je place body à la place de document pour créer/cibler cela met une erreur, peut-être à cause du const qui contient body
// reste: vérifier si dans ul#list il n'ya pas déjà la même citation (donc le même contenu de (data))