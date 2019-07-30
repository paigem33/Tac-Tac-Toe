# Tic Tac Toe in React.js

## Rules of Tic Tac Toe React

* Never update State directly, always use setState()
* Never alter the DOM directly, always operate on a value in state
* Only call setState once per method or render cycle
* State is for values that change, Props is for values to pass to a child component, constants should be set outside the component

## User Stories

* As a user, I should start off seeing a 3x3 grid on the main page
* As a user, I should be able to click on a square to mark it. My partner should be able to click on a square after me and see their mark.
* As a user, when someone has won the game (3 squares in a row: horizontally, vertically, or diagonally) or there are no more squares, an alert will tell me who has won or that there are no more squares and the game has ended.
