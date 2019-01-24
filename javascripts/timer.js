// This function converts seconds into a digital time format.

class Timer {
  constructor() {
    this.time = "00:00";

    // This instance variable helps us when we reset the game
    this.stop = false;
  }

  startTime() {
    // Reset time to zero
    this.time = "00:00";

    // Let the timer move
    this.stop = false;

    // Set seconds counter to zero
    let seconds = 0;
    const timer = setInterval(() => {
      seconds++;
      this.time = this.secConvert(seconds);
      if (this.stop) {
        // This stops our timer
        clearInterval(timer);
      }
    }, 1000);
  }

  stopTime() {
    this.stop = true;
  }

  reset() {
    this.time = "00:00";
    this.stop = false;
  }

  // THIS FUNCTION CONVERTS SECONDS INTO DIGITAL TIME DISPLAY
  secConvert(secs) {
    // First determine the number of minutes, then take the remaing seconds

    let minutes = Math.floor(secs / 60);
    let seconds = secs % 60;

    // Handle single and double digits

    // Seconds
    let secStr;
    if (seconds < 10) {
      secStr = `0${seconds}`;
    } else {
      secStr = `${seconds}`;
    }

    // Minutes
    let minStr;
    if (minutes < 1) {
      minStr = `00`;
    } else if (minutes < 10) {
      minStr = `0${minutes}`;
    } else {
      minStr = `${minutes}`;
    }

    return minStr + ":" + secStr;
  }
}

// TESTING

// let clock = new Timer();

// clock.timer();

// setTimeout(() => {
//   clock.stop = true;
// }, 5000);

// TESTING

export default Timer;
