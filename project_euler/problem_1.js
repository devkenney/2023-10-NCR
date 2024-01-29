const multiples = (num) => {
  let counter = 0

  for (let i = 1; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      counter += i
    }
  }

  return counter
}

console.log(multiples(1000));