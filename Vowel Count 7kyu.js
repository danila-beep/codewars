function getCount(str) {
    let vowelsCount = 0;
    let vowels = ['a','e','i','o','u'];
    let chars = str.split("");
    
    for (let c of chars) {
      if(vowels.includes(c)){
        vowelsCount += 1;
      }
    }
    return vowelsCount;
  }