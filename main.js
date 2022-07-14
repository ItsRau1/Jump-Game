document.addEventListener(`keydown`, tecla)
document.addEventListener(`click`, tecla)
let mario = document.querySelector(`img#mario`)
let tubo = document.querySelector(`img.tubo`)
let botao = document.querySelector(`a#btn`)
let pontu = document.querySelector(`p.pontuacao`)
let pont = 00
let tubopos1 = tubo.offsetLeft

function tecla() {
    mario.classList.add(`jump`)

    setTimeout(function rmv () {
        mario.classList.remove(`jump`)
    }, 500)

    let loop = setInterval(()=>{
        let tubopos = tubo.offsetLeft
        let mariopos = +window.getComputedStyle(mario).bottom.replace(`px`, ``)

        if (tubopos < 110 && mariopos < 56) {
            tubo.style.animation= `none`
            tubo.style.left= `${tubopos}px`
            mario.style.animation= `none`
            mario.src = `images/game-over.png`
            mario.style.width= `4.4em`
            mario.style.margin = `0 0 0 2em`
            mario.style.bottom= `${mariopos}px`
            clearInterval(loop)
            clearInterval(loop2)
            botao.classList.add(`perdeu`)
        } 

    }, 10)

}

    let loop2 = setInterval (() =>{
    pont++
    pontu.innerHTML= `${pont}`
}, 1300)

