# Cosmic Cat 

[Cosmic Cat Live](https://shelchamp.github.io/CatFish/)



![CatFish_game](https://i.imgur.com/WQQackH.png)
![CatFish_game](https://i.imgur.com/6t8ENOq.png)




### Background

Cosmic Cat is a simple 1-player game. The player controls a Cosmic Cat to eat smaller cats, growing larger each time. The Cosmic Cat must also avoid getting eaten by larger cats. The goal of the game is to eat smaller cats until the Cosmic grows massive.


### Architecture and Technologies

This project uses:

* `Vanilla JavaScript` for all game logic and functionality
* `HTML5 Canvas` for DOM manipulation and rendering
* `Webpack` to bundle and serve up the various scripts


### Functionality & MVP

Within Cosmic Cat, users are able to:

* Start the game
* Move the Cosmic Cat using the arrow keys and WASD
* Grow larger as they eat smaller cats


### Cosmic Cat Movement

* Cats are rendered using canvas. Cats are randomly generated with various sizes, starting positions, and velocity
* Enemy cats scale with the Cosmic cat as it grows
* User controls allow for multiple inputs
* Player cat has a maximum speed and will eventually come to a halt if no buttons are pressed


### Sound

* Game sounds are stored as Audio objects that play .wav and mp3. files
* Sounds on collision


### Future direction

Features that were not implemented:

* Fix collision to be 100% visually accurate
* Mute audio
* Add a variety of cat models
* Let users pick from a number of cats to control
* Add add volume slider
* Let users adjust difficulty by increasing or decreasing speed of other cats
