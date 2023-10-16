export const calculateTriangularNumber = (n) => {
    let numeroTriangular = 0;

    for (let i = 1; i <= n; i++) {
      numeroTriangular += i;
    }
  
    return numeroTriangular;
}

export const calculateFibonacciNumber = (n) => {
    if (n <= 1) {
      return n;
    } else {
      return calculateFibonacciNumber(n - 1) + calculateFibonacciNumber(n - 2);
    }
};

export const primeNumber = (n) => {
  let count = 0;
  let num = 2;

  while (count < n) {
    let prime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      count++;
    }
    num++;
  }

  return num - 1;
};