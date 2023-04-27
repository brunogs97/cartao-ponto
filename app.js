const relogio = document.querySelector('.relogio')
const registroChegada = document.querySelector('.horario-chegada')
const iniciar = document.querySelector('.iniciar')
const pause = document.querySelector('.pause')
const zerar = document.querySelector('.zerar')
let second = 0
let timer;

// FUNCAO CONVERTER PARA SEGUNDOS
function getTimeFromSeconds(second) {
   const date = new Date(second * 1000)

   return date.toLocaleTimeString('pt-BR', {
      timeZone: 'UTC',
      hour12: false
   })
}

//FUNCAO MOSTRAR HORA ATUAL
function getHour() {
   const date = new Date()

   return date.toLocaleTimeString('pt-BR', {
      hour12: false
   })
}

//FUNCAO INICIAR RELÓGIO
function startTime() {
   timer = setInterval(() => {
      second++
      relogio.innerHTML = getTimeFromSeconds(second)
   }, 1000)
}

iniciar.addEventListener('click', (event) => {
   relogio.classList.remove('pausado')
   clearInterval(timer)
   startTime()
   registroChegada.innerHTML += `${timer} - ${getHour()}<br />`
})

pause.addEventListener('click', (event) => {
   relogio.classList.add('pausado')
   clearInterval(timer)
})

zerar.addEventListener('click', (event) => {
   relogio.classList.add('pausado')
   clearInterval(timer)
   second = 0
   relogio.innerHTML = '00:00:00'
   registroChegada.innerHTML = ''
})