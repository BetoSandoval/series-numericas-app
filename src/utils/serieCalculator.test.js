import { calculateTriangularNumber } from './seriesCalculator';
import { describe, test , expect } from '@jest/globals';

describe('calculateTriangularNumber', () => {
    test('should calculate the triangular number correctly', () => {
      expect(calculateTriangularNumber(1)).toBe(1);
      expect(calculateTriangularNumber(2)).toBe(3);
      expect(calculateTriangularNumber(3)).toBe(6);
      expect(calculateTriangularNumber(4)).toBe(10);
      expect(calculateTriangularNumber(5)).toBe(15);
      expect(calculateTriangularNumber(6)).toBe(21);
      expect(calculateTriangularNumber(7)).toBe(28);
      expect(calculateTriangularNumber(8)).toBe(36);
      expect(calculateTriangularNumber(9)).toBe(45);
      expect(calculateTriangularNumber(10)).toBe(55); 
    });
});