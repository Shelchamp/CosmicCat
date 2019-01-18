// This function converts seconds into a digital time format.

class Timer {
  constructor() {
    this.time = "00:00";
    this.stop = false;
  }

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

  timer(gameOver = false) {
    let seconds = 0;
    let over = gameOver;
    const timer = setInterval(() => {
      seconds++;
      this.time = this.secConvert(seconds);
      if (this.stop) {
        clearInterval(timer);
      }
    }, 1000);
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
