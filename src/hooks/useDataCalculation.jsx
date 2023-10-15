// indica si se muestra o no el resultado y mada resultado o recomendacion de nuemero primo

import { useState } from "react";
import { 
    calculateFibonacciNumber, 
    calculateTriangularNumber,
    primeNumber 
} from "../utils/seriesCalculator";

const useDataCalculation = () => {
    const [result, setResult] = useState(null)
    
    const handleSeriesResult = (number) => {
        seriesSum(number);
    }

    const handleSubmit = ( number ) => {
        handleSeriesResult(number);
    };

    const seriesSum = (number) => {
        let num = parseInt(number);
        const numberPlusOne = num + 1;
        const fibonacciNumber =  calculateFibonacciNumber(numberPlusOne);
        const triangularNumber = 2 * calculateTriangularNumber(number);
        const prime = primeNumber(numberPlusOne);
        const result = prime - triangularNumber + fibonacciNumber;
        console.log({result})
    }
  
    return { handleSubmit, result };
  };
  
  export default useDataCalculation;