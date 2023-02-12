

const superDigit = (n,k) => {
    for(let i = 0; n > 9; i++) {
        n = String(n).split('').reduce((a,v) => +a + +v)
      }
      return k ? superDigit(n * k) : n   
}

superDigit('9875',4);