let images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


let foto = document.getElementById('foto')//.innerHTML=`<img src="${images.image}" alt="">`
let testo = document.getElementById('testo')
let prec = document.getElementById('prec')
let prox = document.getElementById('prox')
// inizializzo il contatore
let numero = 0
// do un valore di default
foto.innerHTML=`<img src="${images[numero].image}" >`
testo.innerHTML=`<h2>${images[numero].title}</h2><h5>${images[numero].text}</h5>`




    
    
//al evento click - se il numero e' maggiore di 0  viene tolto 1 al contatore ,altrimenti il numero e' uguale a 5
   
    prec.addEventListener("click", function () {
        if(numero>0){
            numero=numero-1
            console.log(images[numero])
            foto.innerHTML=`<img src="${images[numero].image}" >`
            testo.innerHTML=`<h2>${images[numero].title}</h2><h5>${images[numero].text}</h5>`
        }

        else{
            numero=5
        }
        
    })
//al evento click + se il numero e' minore di 4  viene aggiunto 1 al contatore ,altrimenti il numero e' uguale a -1
    prox.addEventListener("click", function () {
        if(numero<4){
            numero=numero+1
            console.log(images[numero])
            foto.innerHTML=`<img src="${images[numero].image}" >`
            testo.innerHTML=`<h2>${images[numero].title}</h2><h5>${images[numero].text}</h5>`
        }
      else{
        numero=-1
      }
    })
    
    


