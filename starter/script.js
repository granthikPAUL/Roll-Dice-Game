'use strict';
let state = true
const button = document.querySelector('.btn--new')
const dice = document.querySelector('.btn--roll')
let currentscore0 = Number(document.querySelector('#current--0').textContent)
let currentscore1 = Number(document.querySelector('#current--1').textContent)
let score0 = Number(document.querySelector('#score--0').textContent)
let score1 = Number(document.querySelector('#score--1').textContent)

dice.addEventListener('click', function () {
    let bt = document.querySelector('.dice')
    if (state) {
        const rand = Math.floor(Math.random() * 6) + 1
        if (rand !== 1) {


            // bt.setAttribute('src','dice-'+rand+'.png')
            bt.src = `dice-${rand}.png`
            bt.style.display = 'block'//changing css property of class
            if (document.querySelector('.player--0').classList.contains('player--active')) {
                currentscore0 += rand
                document.querySelector('#current--0').textContent = currentscore0

            }
            else {
                currentscore1 += rand
                document.querySelector('#current--1').textContent = currentscore1
            }
        }
        if (rand === 1) {
            bt.setAttribute('src', 'dice-' + rand + '.png')
            bt.style.display = 'block'//changing css property of class
            if (document.querySelector('.player--0').classList.contains('player--active')) {
                currentscore0 = 0
                document.querySelector('#current--0').textContent = currentscore0
                document.querySelector('.player--0').classList.remove('player--active')
                document.querySelector('.player--1').classList.add('player--active')
            }
            else {
                currentscore1 += 0
                document.querySelector('#current--1').textContent = currentscore1

                document.querySelector('.player--1').classList.remove('player--active')
                document.querySelector('.player--0').classList.add('player--active')
            }
        }
    }
}
)

let hold = document.querySelector('.btn--hold')
hold.addEventListener('click', function () {
    if(state)
    {
        if (document.querySelector('.player--0').classList.contains('player--active')) {
            score0 += currentscore0
            currentscore0 = 0
            document.querySelector('#current--0').textContent = currentscore0
            document.querySelector('#score--0').textContent = score0
            if (score0 >= 20) {
                state = false
                document.querySelector('#name--0').textContent = "Winner"
                document.querySelector('.player--0').classList.remove('player--active')
            }
            else {
                document.querySelector('.player--0').classList.remove('player--active')
                document.querySelector('.player--1').classList.add('player--active')
            }
    
        }
        else {
            score1 += currentscore1
            currentscore1 = 0
            document.querySelector('#current--1').textContent = currentscore1
            document.querySelector('#score--1').textContent = score1
            if (score1 >= 20) {
                state = false
                document.querySelector('#name--1').textContent = "Winner"
                document.querySelector('.player--1').classList.remove('player--active')
            }
            else {
    
                document.querySelector('.player--1').classList.remove('player--active')
                document.querySelector('.player--0').classList.add('player--active')
            }
        }
    
    }})
    
    button.addEventListener('click', function () {
    
        document.querySelector('.player--0').classList.add('player--active')
        document.querySelector('.player--1').classList.remove('player--active')
    
        currentscore0 = 0
        currentscore1 = 0
        score0 = 0
        score1 = 0
        document.querySelector('.dice').style.display = 'none'
        document.querySelector('#current--0').textContent = currentscore0
        document.querySelector('#score--0').textContent = score0
        document.querySelector('#current--1').textContent = currentscore0
        document.querySelector('#score--1').textContent = score0
    }
)