'use strict'
const store = require('./store')

// const signUpSuccess = function (data) {
//   $('#message').text('Signed up successfully')
//   console.log(data)
// }
//
// const signUpFailure = function (error) {
//   $('#message').text('Error on sign up')
//   console.log(error)
// }

const signInSuccess = function (response) {
  $('#message').text('Signed in successfully')
  console.log('signIn success ran. data is :', response)
  store.user = response.user
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  console.log('signIn failure ran. error is :', error)
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  console.log('signOut success ran. and nothing was returned')
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  console.log('signOut failure ran. error is :', error)
}

// const changePasswordSuccess = function () {
//   $('#message').text('Changed password successfully')
//   console.log('changePassword success ran. and nothing was returned')
// }
//
// const changePasswordFailure = function (error) {
//   $('#message').text('Error on change password')
//   con

const createNewGameSucess = function () {
  $('#message').text('New Game Created')
  console.log('new game created successfully')
}
const createNewGameFailure = function () {
  $('#message').text('Error on Create')
  console.log('new game created successfully')
}

module.exports = {
  // signUpSuccess,
  // signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  // changePasswordSuccess,
  // changePasswordFailure
  createNewGameSucess,
  createNewGameFailure

}
