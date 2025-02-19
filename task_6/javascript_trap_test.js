function createCounter() {
  let count = 0;

  const counter = {
    start: function () {
      const intervalId = setInterval(() => {
        count++;
        console.log("Count:", count);
      }, 1000);

      this.intervalId = intervalId;
    },

    stop: function () {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    },

    getCount: function () {
      return count;
    },
  };

  return counter;
}

const counter = createCounter();
counter.start();

setTimeout(() => {
  console.log("Current count:", counter.getCount());
  // the counter will stop after 5 seconds if not it will continue running indefinitely
  counter.stop();
}, 5000);

// QUestion One
// => The output will be undefined
//  this is because the count variable is declared inside the createCounter function scope and var is not accessible from outside the function.

// Question Two
// a. Variable Initialization
// When first incremented, count++ is actually undefined++ which results in NaN because it is declared but not initialized.
// b. Scope Issues
// The code attempts to access count from outside its scope
// c. Closure Problems
// There's no way to access or control the counter from outside
// d. Memory Leak
// The setInterval continues running indefinitely
// There's no way to stop or clear the interval
// This can lead to memory leaks
