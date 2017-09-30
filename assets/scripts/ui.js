'use strict'
const store = require('./store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  console.log(data)
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up')
  console.log(error)
}

const signInSuccess = function (response) {
  $('#message').text('Signed in successfully')
  console.log('signIn success ran. data is :', response)
  store.user = response.user
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  console.log('signIn failure ran. error is :', error)
}

const signOutSuccess = function (data) {
  $('#message').text('Signed out successfully')
  console.log('signOut success ran. and nothing was returned', data)
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  console.log('signOut failure ran. error is :', error)
}

const changePasswordSuccess = function (data) {
  $('#message').text('Changed password successfully')
  console.log('changePassword success ran. and nothing was returned', data)
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change password')
  console.log('changePassword failure ran. error is :', error)
}

const createNewGameSucess = function (data) {
  $('#message').text('New Game Created')
  console.log('new game created successfully', data)
  store.game = data.game
}
const createNewGameFailure = function () {
  $('#message').text('Error on Create')
  console.log('new game created successfully')
}
const updateGameSucess = function (data) {
  $('#message').text('Game Updated')
  console.log('update successfully', data)
}
const updateGameFailure = function () {
  $('#message').text('Updated Failed')
  console.log('new game created successfully')
}
const getGameSucess = function (data) {
  $('#message').text('Total Number of games, ')
  console.log('Total number of games', data.games.length)
}
const getGameFailure = function () {
  $('#message').text('Get  Failed')
  console.log('new game created successfully')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  createNewGameSucess,
  createNewGameFailure,
  updateGameSucess,
  updateGameFailure,
  getGameSucess,
  getGameFailure

}
