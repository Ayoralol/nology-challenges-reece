const delayedInDec = (n, mode, timeout = 2500) => {
  // n initial number
  // mode: a string - either inc or dec
  // timeout: delay time in ms
  return new Promise((resolve, reject) => {
    if (typeof n !== "number") {
      reject(new Error("n must be a number"));
    }
    if (timeout < 0) {
      reject(new Error("timeout must be a positive number"));
    }
    if (mode.toLowerCase() !== "inc" && mode.toLowerCase() !== "dec") {
      reject(new Error("mode must be 'inc' or 'dec'"));
    }
    setTimeout(() => {
      if (mode.toLowerCase() === "inc") {
        resolve(n + 1);
      } else {
        resolve(n - 1);
      }
    }, timeout);
  });
};

// reject if n is not a number
// timeout is negative
// mode isnt inc or dec

delayedInDec(0, "dec")
  .then(console.log)
  .catch((err) => console.error(err.message));
delayedInDec(8, "dec", -1000)
  .then(console.log)
  .catch((err) => console.error(err.message));
delayedInDec(22, "decsdfg", 5000)
  .then(console.log)
  .catch((err) => console.error(err.message));
