const greeter = (myArray, counter) => {
    const greetText = 'Hello ';
    for (const name of myArray) {
      console.log(`${greetText}${name}`);
    }
  };
  
  greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan']);
  
//2nd way of solving it
  const greeter1 = (myArray, counter) => {
    const greetText = 'Hello ';
    let currentCount = 0; // To keep track of how many names we've greeted
    for (const name of myArray) {
      if (currentCount >= counter) break; // Stop if we reach the counter limit
      console.log(`${greetText}${name}`);
      currentCount++; // Increment the count
    }
  };
  
  greeter1(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 2);
  