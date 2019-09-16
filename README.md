# SUDOKU

A Sudoku game made with React and Sudoku-UMD package

## PLAY IT

You can play the game here: [CLICK](https://danielmark0116.github.io/sudoku/)

Recommended playing in desktops, RWD not yet implemented

## HOW TO PLAY

Simply select the desired difficulty level and input the numbers in empty fields (from 1 to 9). You can do it by first selecting the empty field and then either pressing the number on your keyboard or using the popup window

---

If you want to fork the repo and work on it yourself a little, just clone in to your disk, open and run

`npm install`

and then

`npm run dev` for development web-server (initially on port 3000, you can change it in webpack.config)

or

`npm run build` in order to build the production version to the './docs' folder

#### Packages used

- React
- react-hot-loader
- prop-types
- sudoku-umd
- babel/core babel/cli webpack-dev-server webpack/cli with different plugins, presets and loaders
- gsap

---

## FEATURES TO BE ADDED

- logging with google and facebook for saving the game and keeping track of each signed user's score
- top players chart
- some fancy animation trigerred upon solving the sudoku board
- making it RWD

---
