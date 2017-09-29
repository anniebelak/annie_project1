'use strict'
const getFormFields = require(`../../lib/get-form-fields`)
// const store = require('./store')

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('sign up ran!')

  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

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

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password ran!')

  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

let player = 'x'
let winner = 'x'

const gameBoard = ['', '', '', '', '', '', '', '', '']

const onClick = function (event) {
  event.preventDefault()
  const value = $(this).attr('id')
  console.log(value)
  $(this).text(player)

  gameBoard[value] = player
  console.log(gameBoard)
  if (player === 'x') {
    player = 'o'
  } else {
    player = 'x'
  }
  determineWinner(gameBoard)
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
    console.log('You are the Winner')
  }
}
// const determineWinner = function (gameBoard) {
//   if (gameBoard === ['x', 'x', 'x', 'o', 'o', '', '', '', '']) {
//     winner = 'x'
//     console.log('X is the winner!!!')
//   } else {
//     if (gameBoard === ['o', 'o', 'o', 'x', 'x', '', '', '', 'x']) {
//       winner = 'o'
//       console.log('O is the Winner!!!')
//     } else {
//       if (gameBoard === ['o', 'o', '', 'x', 'x', 'x', '', 'o', 'o']) {
//         winner = 'x'
//         console.log('X is a Winner!!!')
//       } else {
//         if (gameBoard === ['x', 'x', '', 'o', 'o', 'o', '', 'x', ' ']) {
//           winner = 'o'
//           console.log('O is the Winner!!!')
//         } else {
//           if (gameBoard === [' ', '', '', 'o', 'o', ' ', 'x', 'x', 'x']) {
//             winner = 'x'
//             console.log('X is the Winner!!!')
//           } else {
//             if (gameBoard === [' ', '', '', 'x', 'x', ' ', 'o', 'o', 'o']) {
//               winner = 'o'
//               console.log('O is the Winner!!!')
//             } else {
//               if (gameBoard === [' ', '', 'x', 'o', 'x', ' ', 'x', 'o', 'o']) {
//                 winner = 'x'
//                 console.log('X is the Winner!!!')
//               } else {
//                 if (gameBoard === [' ', '', 'o', 'x', 'o', ' ', 'o', 'x', 'x']) {
//                   winner = 'o'
//                   console.log('O is the Winner!!!')
//                 } else {
//                   if (gameBoard === [' x', '', 'o', ' ', 'x', ' ', 'o', ' ', 'x']) {
//                     winner = 'x'
//                     console.log('X is the Winner!!!')
//                   } else {
//                     if (gameBoard === [' o', '', 'o', ' ', 'o', ' ', '', 'x', 'o']) {
//                       winner = 'o'
//                       console.log('O is the Winner!!')
//                     } else {
//                       console.log('Please Try Again!!')
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
// const onClick = function (event) {
//   event.preventDefault()
//   const value = $(this).attr('id')
//   console.log(value)
//   $(this).text(player)
//
//   gameBoard[value] = player
//   console.log(gameBoard)
//   if (player === 'x') {
//     player = 'o'
//   } else {
//     player = 'x'
//   }
//   determineWinner()
// }
// determineWinner()
// console.log(winner)
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('.square').on('click', onClick)
}

module.exports = {
  addHandlers,
  determineWinner
}
