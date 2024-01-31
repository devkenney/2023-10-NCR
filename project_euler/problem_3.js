let primeArr = [2];
let factorArr = [];
const maxNum = 600851475143

let primeLoop = (possiblePrime) => {
  for (let num of primeArr) {
    if (possiblePrime % num === 0) {
      isPrime = false
      return
    } else {
      isPrime = true
    }
  }
}

for (let i = 1; i < (Math.ceil(maxNum / 2)); i++) {
  let isPrime = false
  primeLoop(i);
  if (isPrime) {
    primeArr.push(i)
    if (maxNum % i === 0) {
      factorArr.push(i)
    }
  }
}

console.log(Math.max(factorArr))