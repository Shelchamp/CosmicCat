# CatFish


### Wireframes

![CatFish_game](https://i.imgur.com/ftR5Cnx.png?1)

This app will consist of a single screen fitted to the browser window. The title of the game will be listed at the top and links to the GitHub and my LinkedIn will sit underneath. To the left of the game screen will be brief instructions and rules for the game. To the right of the screen will be a board that keeps track of high scores (best times). In the bottom right of the game window will be a button to mute the sound.


### Background

CatFish is a simple 1-player game. The player controls the Cat Fish to eat smaller fish, growing larger each time. The Cat Fish must also avoid getting eaten by larger fish. The goal of the game is to eat smaller fish until the Cat Fish becomes the biggest fish.


### Architecture and Technologies

This project will use:

* Vanilla JS for overall structure and game logic
* `HTML5 Canvas` for DOM manipulation and rendering
* `Webpack` to bundle and serve up the various scripts


### Functionality & MVP

Within CatFish, users are able to:

* Start the game
* Move the CatFish using the arrow keys (and WASD if time permits)
* View current score
* Mute sound


### CatFish Movement

Fish are rendered using canvas. Fish are randomly generated with various sizes, starting positions, and velocity. User controls allow for multiple inputs.


### Sound

Game sounds are implemented using howler.js. Sound can be muted or turned back on using the sound button.


### High Scores

User high scores are stored in the browser's cookies using js-cookie.


### Implementation Timeline


**Over weekend:**

- [ ] Review Asteroids project to get sense of game logic and implementation
- [ ] Research which technologies will be necessary for CatFish


**Day 1:** Dedicate day to learning more about the tools that will be used to make CatFish. Basic setup. Get `webpack` up and running. Create `webpack.config.js` and `package.json`. Review the basics of `Canvas`. Goals for the day:

- [ ] Get a green bundle with `webpack`
- [ ] Review `Canvas` and have the basic layout of the game displayed


**Day 2:** Continue learning tools. Build `mainfish.js`, `movement.js`, and `game.js`. Each of these classes will create the Cat Fish, handle movement logic, and general game logic, respectively. Goals for the day:

- [ ] Complete `mainfish.js`
- [ ] Render the Cat Fish onto screen
- [ ] Create controls to move Cat Fish around screen


**Day 3:** Build `otherfish.js`, the class that will handle the logic of other fish. Add images for each of the various fish in the game.

- [ ] Complete `fish.js`
- [ ] Render the other fish on the Canvas screen
- [ ] Complete the logic for the other fish and the interactions between the other fish and the Cat Fish


**Day 4:** Install the controls for the user to interact with the game. Style the frontend, making it polished and professional. Goals for the day:

- [ ] Create controls for game start, stop
- [ ] Have a styled Canvas, nice looking controls and title
- [ ] Add GitHub and LinkedIn links


**Day 5:** Add finishing touches



### Bonus features

Additional features that would enhance the app:

* Add a variety of fish models
* Let users pick from a number of fish to control
* Add add volume slider
* Let users adjust difficulty by increasing or decreasing speed of other fish
