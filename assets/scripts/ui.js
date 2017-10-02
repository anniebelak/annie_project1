'use strict'
const store = require('./store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#sign-up').hide()
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up!', error)
  $('#sign-up').hide()
}

const signInSuccess = function (response) {
  $('#message').text('Signed in successfully')
  store.user = response.user
  $('#sign-in').hide()
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in', error)
}

const signOutSuccess = function (data) {
  $('#message').text('Signed out successfully')
  store.user = null
  $('#sign-in').show()
  $('#sign-up').show()
  $('#change-password').show()
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out', error)
}

const changePasswordSuccess = function (data) {
  $('#message').text('Changed password successfully')
  $('#change-password').hide()
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change password', error)
  $('#change-password').hide()
}

const createNewGameSucess = function (data) {
  $('#message').text('New Game Created')
  store.game = data.game
}
const createNewGameFailure = function () {
  $('#message').text('Error on Create')
}
const updateGameSucess = function (data) {
  $('#message').text('Game Updated')
}
const updateGameFailure = function () {
  $('#message').text('Updated Failed')
}
const getGameSucess = function (data) {
  $('#message').text('Total Number of Games ' + data.games.length)
}
const getGameFailure = function () {
  $('#message').text('Get  Failed')
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
