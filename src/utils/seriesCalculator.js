export const calculateTriangularNumber = (n) => {
    let numeroTriangular = 0;

    for (let i = 1; i <= n; i++) {
      numeroTriangular += i;
    }
  
    return numeroTriangular;
}

export const CalculateFibonacciNumber = (n) => {
    if (n <= 1) {
      return n;
    } else {
      return CalculateFibonacciNumber(n - 1) + CalculateFibonacciNumber(n - 2);
    }
};

export const isPrimeNumber = (n) => {
    if (n <= 1) return false;

    // verifica que el numero solo pueda ser divible entre 1 y si mismo
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    
    return true;

}