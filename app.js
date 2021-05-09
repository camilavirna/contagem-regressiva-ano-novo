const secondsContainer = document.querySelector('#seconds') //referencias de divs
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')
const nextYearContainer = document.querySelector('#year')
const spinnerLoading = document.querySelector ('#loading')
const countdownContainer = document.querySelector ('#countdown')

const  nextYear = new Date().getFullYear() + 1 // ele pega a data atual e adiciona o próximo ano com "getFullYear"
const newYearTime = new Date (`January 01 ${nextYear} 00:00:00`) /* a função "Date"gera um objeto que representa um momento no tempo.
Ainda na linha 2, ele chama a função new Date (nova data) que será apresentada e utiliza uma interpolação do ano, para que não seja 
necessário ficar atualizando todo ano.*/

nextYearContainer.textContent = nextYear

const updateCountdown = () => { // neste bloco trata-se da diferença do tempo do dia 01 de janeiro de 2022 até o dia atual, utilizando funções que chamam esses valores já declarados anteriomente.
    const currentTime = new Date()
    const difference = newYearTime - currentTime
    const days = Math.floor(difference / 1000 / 60 / 60 / 24) // essa divisão vai resultar nos dias que faltam para chegar a virada de ano.
    const hours = Math.floor(difference / 1000 / 60 / 60 ) %24 // essa divisão vai resultar nas horas que faltam para chegar a virada de ano.
    const minutes = Math.floor(difference / 1000 / 60 ) %60 //
    const seconds = Math.floor(difference / 1000 ) %60 //

    secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds
    minutesContainer.textContent = minutes < 10 ? '0' + minutes : minutes
    hoursContainer.textContent = hours < 10 ? '0' + hours : hours
    daysContainer.textContent = days < 10 ? '0' + days : days
} //função da atualização da contagem que recebe uma outra função que deverá ser utilizada como parâmetro da função updateCountdown abaixo.

setTimeout(() => {
    spinnerLoading.remove() //função para remover o spinner depois de 1 segundo após o reloading (utilizei o id do index.html, para referencia do objeto)
    countdownContainer.style.display = 'flex' // na linha 32 é uma funcionalidade que faz reaparecer a contagem, usando a referencia de div
}, 1000) // vai invocação uma função no tempo que for especificado para ele.
setInterval(updateCountdown, 1000) // método que invoca uma função repetidamente e a repetição da invocação dessa função vai ocorrer no intervalo de tempo que for especificado.