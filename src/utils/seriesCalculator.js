export const calculateTriangularNumber = (n) => {
    let numeroTriangular = 0;

    for (let i = 1; i <= n; i++) {
      numeroTriangular += i;
    }
  
    return numeroTriangular;
}