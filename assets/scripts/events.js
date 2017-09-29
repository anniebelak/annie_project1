'use strict'
const getFormFields = require(`../../lib/get-form-fields`)
// const store = require('./store')

const api = require('./api')
const ui = require('./ui')

// const onSignUp = function (event) {
//   event.preventDefault()
//   console.log('sign up ran!')
//
//   const data = getFormFields(this)
//   api.signUp(data)
//     .then(ui.signUpSuccess)
//     .catch(ui.signUpFailure)
// }

const onSignIn = function (event) {
  event.preventDefault()
  console.log('sign in ran!')

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('sign out ran')

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// const onChangePassword = function (event) {
//   event.preventDefault()
//   console.log('change password ran!')
//
//   const data = getFormFields(this)
//   api.changePassword(data)
//     .then(ui.changePasswordSuccess)
//     .catch(ui.changePasswordFailure)
// }
const createNewGame = function (event) {
  gameBoard = ['', '', '', '', '', '', '', '', '']
  $('.square').text('')
  $('#win').text('')
  $('#gameOver').text('')

  event.preventDefault()
  console.log('game created')

  const data = getFormFields(this)
  api.create(data)
    .then(ui.CreateNewGameSucess)
    .catch(ui.CreateNewGameFailure)
}

let player = 'x'
let gameOver = false

let gameBoard = ['', '', '', '', '', '', '', '', '']

const onClick = function (event) {
  event.preventDefault()
  if (gameOver === true) {
    console.log('hello')
    $('#gameOver').text('GAME OVER!!')
    gameBoard = ['', '', '', '', '', '', '', '', '']
    return
  }
  const value = $(this).attr('id')
  if ($(this).text() !== '') {
    console.log('already selected please try again')
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
// gameBoard[value] = player
console.log(gameBoard)
// if (player === 'x') {
//   player = 'o'
// } else {
//   player = 'x'
// // }
// determineWinner(gameBoard)
// }
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
    if (!gameBoard.some(element => element === '')) {
      gameOver = true
    }
  }
}

const addHandlers = () => {
  // $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  // $('#change-password').on('submit', onChangePassword)
  $('.square').on('click', onClick)
  $('#create').on('click', createNewGame)
}

module.exports = {
  addHandlers,
  determineWinner
  // determineDraw
}
