'use strict'
const getFormFields = require(`../../lib/get-form-fields`)
// const store = require('./store')

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  $('#email').val('')
  $('#password1').val('')
  $('#password2').val('')
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  $('#sign-in-val').val('')
  $('#sign-password').val('')
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
  $('#password3').val('')
  $('#password4').val('')
}

const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
const createNewGame = function (event) {
  gameBoard = ['', '', '', '', '', '', '', '', '']
  // $('.square').text('')
  // $('#win').text('')
  // $('#gameOver').text('')
  gameOver = false

  event.preventDefault()

  const data = getFormFields(event.target)
  api.create(data)
    .then(ui.createNewGameSucess)
    .catch(ui.createNewGameFailure)
  $('.square').text('')
  $('#win').text('')
  $('#gameOver').text('')
  $('try').text('')
  $('.square').show()
}

const updateGame = function (event) {
  const index = $(this).attr('id')
  const value = $(this).text()
  const data = {
    'game': {
      'cell': {
        'index': index,
        'value': value
      }
    }
  }

  event.preventDefault()
  api.update(data)
    .then(ui.updateGameSucess)
    .catch(ui.updateGameFailure)
}
const getGame = function (event) {
  event.preventDefault()
  api.index()
    .then(ui.getGameSucess)
    .catch(ui.getGameFailure)
}

let player = 'x'
let gameOver = false

let gameBoard = ['', '', '', '', '', '', '', '', '']

const onClick = function (event) {
  event.preventDefault()
  if (gameOver === true) {
    $('#gameOver').text('GAME OVER!!')
    gameBoard = ['', '', '', '', '', '', '', '', '']
    return
  }
  const value = $(this).attr('id')
  if ($(this).text() !== '') {
    $('#try').text('Please try again, already selected play.')
  } else {
    $(this).text(player)
    gameBoard[value] = player
    determineWinner(gameBoard)
    // determineDraw(gameBoard)
    if (player === 'x') {
      player = 'o'
    } else {
      player = 'x'
    }
  }
}

const determineWinner = function (gameBoard) {
  if ((gameBoard[1] !== '' && gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]) ||
(gameBoard[3] !== '' && gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]) ||
(gameBoard[6] !== '' && gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]) ||
(gameBoard[1] !== '' && gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]) ||
(gameBoard[0] !== '' && gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]) ||
(gameBoard[2] !== '' && gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8]) ||
(gameBoard[0] !== '' && gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) ||
(gameBoard[6] !== '' && gameBoard[6] === gameBoard[4] && gameBoard[4] === gameBoard[2])) {
    console.log(player + 'hello')
    $('#win').text('Player' + ' ' + player + ' ' + 'is the Winner!!!')
    gameOver = true
  } else if (gameOver === false) {
    if (gameBoard.every(element => element !== '')) {
      gameOver = true
      $('#tie').text('Tie game, please play again!!')
    }
  }
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('.square').on('click', onClick)
  $('#create').on('click', createNewGame)
  $('.square').on('click', updateGame)
  $('#get').on('click', getGame)
  $('.square').hide()
}

module.exports = {
  addHandlers,
  determineWinner
}
