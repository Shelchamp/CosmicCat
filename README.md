# CatFish

[Cat Fish Live](https://shelchamp.github.io/CatFish/)



![CatFish_game](https://i.imgur.com/WQQackH.png)
![CatFish_game](https://i.imgur.com/6t8ENOq.png)




### Background

CatFish is a simple 1-player game. The player controls an In Bread Cat to eat smaller cats, growing larger each time. The In Bread Cat must also avoid getting eaten by larger cats. The goal of the game is to eat smaller cats until the In Bread Cat becomes massive.


### Architecture and Technologies

This project uses:

* `Vanilla JavaScript` for all game logic and functionality
* `HTML5 Canvas` for DOM manipulation and rendering
* `Webpack` to bundle and serve up the various scripts


### Functionality & MVP

Within CatFish, users are able to:

* Start the game
* Move the In Bread Cat using the arrow keys and WASD
* Grow larger as they eat smaller cats


### CatFish Movement

* Cats are rendered using canvas. Fish are randomly generated with various sizes, starting positions, and velocity
* User controls allow for multiple inputs
* Player cat has a maximum speed and will eventually come to a halt if no buttons are pressed


### Sound

* Game sounds are stored as Audio objects that play .wav and mp3. files
* Sounds on collision


### Future direction

Features that were not implemented:

* Show high scores
* Mute audio
* Add a variety of fish models
* Let users pick from a number of fish to control
* Add add volume slider
* Let users adjust difficulty by increasing or decreasing speed of other fish
