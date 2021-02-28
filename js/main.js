document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('yellow').onclick = partyYellow
document.getElementById('red').onclick = partyRed
document.getElementById('orange').onclick = partyOrange



function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
  document.querySelector('body').style.color = 'white'
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
}

function partyYellow(){
  document.querySelector('body').style.background = 'rgb(228, 228, 40)'
  document.querySelector('body').style.color = 'black'
}

function partyRed() {
  document.querySelector('body').style.backgroundColor = 'rgb(216, 17, 17)'
  document.querySelector('body').style.color = 'white'
}

function partyOrange() {
  document.querySelector('body').style.backgroundColor = 'rgba(233, 122, 32, 0.959)'
  document.querySelector('body').style.color = 'white'
}