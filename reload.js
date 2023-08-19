const random = document.querySelector('#show');
const press = document.querySelector('#press');
const sound = document.querySelector('#sound');
const card = document.querySelector('.container');
// const intro = document.querySelector('#intro')


const shaker = [
    { transform: 'translateX(0)' },
    { transform: 'translateX(10px)' },
    { transform: 'translateX(-10px)' },
    { transform: 'translateX(10px)' },
    { transform: 'translate(0)' },
]

const shakerTimer = {
    duration: 200,
    iterations: 8,
}

press.addEventListener('click', () => {
    //random.src = "creatures/3-dragon/dragon-1.jpg"
    let num = Math.floor((Math.random() * 22) + 1)
    console.log(`creatures/3-dragon/dragon-${num}.jpg`)

    random.src = `creatures/3-dragon/dragon-${num}.jpg`;

    let num2 = Math.floor((Math.random() * 14) + 1);
    console.log(num2);


    if (num2 < 10) {
        sound.src = `creatures/sounds/d-sound-${num2}.wav`
    } else {
        sound.src = `creatures/sounds/d-sound-${num2}.mp3`
    }


    card.animate(shaker, shakerTimer);

    // card.style.transitionDelay = "2s";
    // card.style.transform = "translateX(100px)"

    sound.play();
    // intro.play();

})