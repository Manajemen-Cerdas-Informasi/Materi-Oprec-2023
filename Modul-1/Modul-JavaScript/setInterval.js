let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(`This message will appear every second. Count: ${count}`);
  if (count >= 5) {
    clearInterval(intervalId);
    console.log("Stopped!");
  }
}, 1000);
