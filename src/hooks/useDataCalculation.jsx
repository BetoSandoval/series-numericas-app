// indica si se muestra o no el resultado y mada resultado o recomendacion de nuemero primo

import { useState } from "react";
import {
    calculateFibonacciNumber, 
    calculateTriangularNumber,
    primeNumber 
} from "../utils/seriesCalculator";

const useDataCalculation = () => {
    const [sumResult, setSumResult] = useState(null);

    const handleSubmit = ( number ) => {
        const result  = seriesSum(number);
        setSumResult(result)
    };

    const seriesSum = (number) => {
        let num = parseInt(number);
        const numberPlusOne = num + 1;
        const fibonacciNumber =  calculateFibonacciNumber(numberPlusOne);
        const triangularNumber = 2 * calculateTriangularNumber(number);
        const prime = primeNumber(numberPlusOne);
        const result = prime - triangularNumber + fibonacciNumber;
        return result 
    }
  
    return { handleSubmit, sumResult };
  };
  
  export default useDataCalculation;