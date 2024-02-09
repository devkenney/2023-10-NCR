let palindromeArr = [];

for (let i = 999; i >= 900; i--) {
  for (let j = 999; j >= 900; j--) {
    let num = i * j;
    num = String(num)
    let numReversed = num.split('').reverse().join('')
    if (num == numReversed) {
      palindromeArr.push(Number(num))
    }
  }
}

console.log(palindromeArr);
console.log(Math.max(...palindromeArr))