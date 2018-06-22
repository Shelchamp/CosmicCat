# Cat Fish

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

Within Cat Fish, users are able to:

* Start the game
* Move the In Bread Cat using the arrow keys and WASD
* Grow larger as they eat smaller cats


### Cat Fish Movement

* Cats are rendered using canvas. Cats are randomly generated with various sizes, starting positions, and velocity
* User controls allow for multiple inputs
* Player cat has a maximum speed and will eventually come to a halt if no buttons are pressed


### Sound

* Game sounds are stored as Audio objects that play .wav and mp3. files
* Sounds on collision


### Future direction

Features that were not implemented:

* Show high scores
* Add a greater variety of sounnds
  * Play sound when cat reaches a particular size
  * Have In Bread Cat purr when it is stationary
* Allow users to Start and Restart game with button press
* Draw Game Over screen
* Mute audio
* Add a variety of cat models
* Let users pick from a number of cats to control
* Add add volume slider
* Let users adjust difficulty by increasing or decreasing speed of other cats
