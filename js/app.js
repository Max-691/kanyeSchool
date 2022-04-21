async function quote(){
    fetch('https://api.kanye.rest/').then((response) => response.json())
    .then(json => console.log(json))
    .catch(err => console.log('Request Failed:', err))
    }

const body = document.body;
let addButton = document.getElementsByClassName('add');
let get_ul = document.getElementById('list');

addButton[0].addEventListener("click", function(){
    quote()
    .then(data => document.createElement('li'));
    let get_li = body.getElementsByTagName('li');
    get_ul.appendChild(get_li);
    get_li[0].innerHTML = data;
    
    //vérification doublons:

    if (get_li) {
        
    }
})
// à cahque fois que je place body à la place de document pour créer/cibler cela met une erreur, peut-être à cause du const qui contient body
// reste: vérifier que la citation n'est pas déjà présente