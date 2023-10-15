import {
  calculateTriangularNumber,
  calculateFibonacciNumber,
  primeNumber
} from "./seriesCalculator";
import { describe, test, expect } from "@jest/globals";

describe("calculate three diferents series", () => {
  test("Should calculate the triangular number from 1 to 10 correctly", () => {
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

  test("Calculate the Fibonacci sequence from 1 to 10 correctly", () => {
    expect(calculateFibonacciNumber(1)).toBe(1);
    expect(calculateFibonacciNumber(2)).toBe(1);
    expect(calculateFibonacciNumber(3)).toBe(2);
    expect(calculateFibonacciNumber(4)).toBe(3);
    expect(calculateFibonacciNumber(5)).toBe(5);
    expect(calculateFibonacciNumber(6)).toBe(8);
    expect(calculateFibonacciNumber(7)).toBe(13);
    expect(calculateFibonacciNumber(8)).toBe(21);
    expect(calculateFibonacciNumber(9)).toBe(34);
    expect(calculateFibonacciNumber(10)).toBe(55);
  });

  test('Calculating the 1st prime number', () => {
    expect(primeNumber(1)).toBe(2);
  });

  test('Calculating the 2nd prime number', () => {
    expect(primeNumber(2)).toBe(3);
  });

  test('Calculating the 3rd prime number', () => {
    expect(primeNumber(3)).toBe(5);
  });

  test('Calculating the 4th prime number', () => {
    expect(primeNumber(4)).toBe(7);
  });

  test('Calculating the 5th prime number', () => {
    expect(primeNumber(5)).toBe(11);
  });

  test('Calculating the 6th prime number', () => {
    expect(primeNumber(6)).toBe(13);
  });

  test('Calculating the 7th prime number', () => {
    expect(primeNumber(7)).toBe(17);
  });

  test('Calculating the 8th prime number', () => {
    expect(primeNumber(8)).toBe(19);
  });

  test('Calculating the 9th prime number', () => {
    expect(primeNumber(9)).toBe(23);
  });

  test('Calculating the 10th prime number', () => {
    expect(primeNumber(10)).toBe(29);
  });

});
