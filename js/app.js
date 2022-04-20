fetch('https://api.kanye.rest/').then((response) => response.json())
.then(json => console.log(json))
.catch(err => console.log('Request Failed:', err))
const body = document.body;
let addButton = body.getElementsByTagName[0];

addButton.addEventListener("click", function(){
    
})