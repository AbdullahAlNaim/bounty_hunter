const creature = document.querySelector('.beasty');
const battle = document.querySelector('.battleSound');
const sound = document.querySelector('#sound')

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


if (battle) {
    battle.addEventListener('click', () => {
        creature.animate(shaker, shakerTimer);
        sound.play();
    })
} else {
    console.log('not found')
}
