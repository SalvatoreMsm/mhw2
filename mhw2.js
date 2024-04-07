const PHOTO_LIST_BACKGROUND_NEXT = [
    "url(https://www.mysocialweb.it/wp-content/uploads/2024/03/recupero-sito-web.webp)",
    "url(https://www.mysocialweb.it/wp-content/uploads/2024/02/creare-link.webp)",
    "url(https://www.mysocialweb.it/wp-content/uploads/2024/02/anafora.webp)",
    /*"url(https://www.mysocialweb.it/wp-content/uploads/2024/02/punto-esclamativo-1.webp)"
    "url(https://www.mysocialweb.it/wp-content/uploads/2024/02/web-copywriter.webp)",
    "url(https://www.mysocialweb.it/wp-content/uploads/2024/02/immagini-blog.webp)"*/
];

let PHOTO_LIST_BACKGROUND_BACK = [];

function onLente(event){
    const l = event.currentTarget;
    l.classList.add('hidden');
    for(let items of item){
        items.classList.add('hidden');
    }
    searchBar.classList.remove('hidden'); 
    blocco_x.classList.remove('hidden');
    blocco_x.classList.add('inlineBlock');
    const x = document.createElement('img');
        x.setAttribute('id','x');
        x.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/2048px-Red_X.svg.png';
        blocco_x.appendChild(x);
        x.addEventListener("click", onX); 
}

function onX(event){
    blocco_x.innerHTML = '';
    blocco_x.classList.add('hidden');
    blocco_x.classList.remove('inlineBlock');
    for(let items of item){
        items.classList.remove('hidden');
    }
    console.log(event.  currentTarget);  
    console.log(event);
    searchBar.classList.add('hidden');
    lente.classList.remove('hidden');
    
}

function forward(event){
        for(let i = 0; i < 3; i++){

                let item = item_riga[i];
                let image = item.querySelector('.immagine');
                let index = parseInt(item.dataset.index);
                PHOTO_LIST_BACKGROUND_BACK[index] = image.style.backgroundImage;
                image.style.backgroundImage = PHOTO_LIST_BACKGROUND_NEXT[i];


        }

        event.currentTarget.removeEventListener("click", forward);

}

function backward(event){

    for(let i = 0; i < 3; i++){
        let item = item_riga[i];
        let image = item.querySelector('.immagine');
        image.style.backgroundImage = PHOTO_LIST_BACKGROUND_BACK[i];


    }
    next_button.addEventListener("click", forward);

}

const lente = document.querySelector('.item_h_in_lente');
const searchBar = document.querySelector('#search_bar');
const item = document.querySelectorAll('.item_h_in');
const item_riga = Array.from(document.querySelectorAll('.item_riga'));
console.log(item_riga);
//const x = document.querySelector('#x');
const blocco_x = document.querySelector('.container_x');
blocco_x.classList.add('hidden');
next_button = document.querySelector('#next_button');
const previous_button = document.querySelector('#previous_button');

/*for(const button of next_button){
    button.addEventListener("click", forward);
}
for(const button of previous_button){
    button.addEventListener("click", backward);
}*/
lente.addEventListener("click", onLente);
//x.addEventListener("click", onX);

next_button.addEventListener("click", forward);
previous_button.addEventListener("click", backward);