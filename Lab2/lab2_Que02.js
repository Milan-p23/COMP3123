const capitalize = (word) => {
    word = word.toLowerCase(); 
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  
  console.log(capitalize("MIlan")); 
  console.log(capitalize("fooBar")); 
  console.log(capitalize("nodeJs")); 
  