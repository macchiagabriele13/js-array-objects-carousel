/* Creo la mia Arrey di foto */

/* const images = [
    './assets/img/01.webp',
    './assets/img/02.webp',
    './assets/img/03.webp',
    './assets/img/04.webp',
    './assets/img/05.webp',
]
 */


/* Inserisco Array Oggetti */

const images = [
    {
        image: './assets/img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: './assets/img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: './assets/img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: './assets/img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: './assets/img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

/* Seleziono il luogo dove insiere la lista */

const slidesEl = document.querySelector(".slides")


/* Creo il ciclo e inserisco l'immagine, */

let activeSlide = 0

for (let i = 0; i < images.length; i++) {
    const singleImage = images[i];
    const imageElement = singleImage.image
    console.log(imageElement);


    // let activeClass;
    // if (i === activeSlide) {
    //     activeClass = 'active';
    // }

    const activeClass = (i === activeSlide) ? 'active' : '';

    const slideMarkup = createMarkup(activeClass, imageElement, singleImage)

    slidesEl.insertAdjacentHTML("beforeend", slideMarkup)

}

function createMarkup (classe, immagine, immagineSingola) {
    const markup = `<div class="slide ${classe}">
                <img class="" src="${immagine}" alt="">
                <div class="card_overlay">
                    <div class="text_overlay">
                        <h3>${immagineSingola.title}</h3>
                        <p>${immagineSingola.text}</p>
                    </div>
                </div>
            </div>`;
    return markup;
}


/* Creo la variabile per definire active e la posiziono sopra il ciclo */
/* let activeSlide */

/* seleziono bottoni avanti e indietro */

const nextButtonEl = document.querySelector(".next")
const prevButtonEl = document.querySelector(".prev")


/* Creo click bottone */

nextButtonEl.addEventListener('click', function () {
    console.log("next");

    /* Seleziono immagine corrente attiva */
    /* const currentImage = document.querySelector('.slides > img.active')
    console.log(currentImage); */

    /* Selezione con query selector all */
    const slides = document.querySelectorAll('.slides > .slide')
    const currentSlide = slides[activeSlide]
    console.log(currentSlide);

    /* Tolgo classe active */
    currentSlide.classList.remove("active")

    /* Incremento immagine */
    activeSlide++

    /* Seleziono nuova immagine */
    /*  const nextImage = document.querySelector('.slides > img.active')
     console.log(currentImage); */

    let nextImage = slides[activeSlide]
    console.log(nextImage);
    
    /* Ciclo infinito */

    if (activeSlide > images.length -1) {
        activeSlide = 0
        nextImage = slides[activeSlide]
    
        
    } 

    /* Aggiungo classe active */
    nextImage.classList.add('active')
    
})

prevButtonEl.addEventListener('click', function () {
    console.log("prev");

    /* Selezione con query selector all */
    const slides = document.querySelectorAll('.slides > img')
    const currentImage = slides[activeSlide]
    console.log(currentImage);

    /* Tolgo classe active */
    currentImage.classList.remove("active")

    /* Decremento immagine */
    activeSlide--

    /* Seleziono nuova immagine */
    /*  const nextImage = document.querySelector('.slides > img.active')
    console.log(currentImage); */

    let nextImage = slides[activeSlide]
    console.log(nextImage);


    if (activeSlide < 0) {
        activeSlide = images.length -1 
        console.log(activeSlide);
        nextImage = slides[activeSlide]
        
    }

    /* Aggiungo classe active */
    nextImage.classList.add('active')


})








