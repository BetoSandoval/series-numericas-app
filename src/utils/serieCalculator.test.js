import {
  calculateTriangularNumber,
  CalculateFibonacciNumber,
  isPrimeNumber,
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
    expect(CalculateFibonacciNumber(1)).toBe(1);
    expect(CalculateFibonacciNumber(2)).toBe(1);
    expect(CalculateFibonacciNumber(3)).toBe(2);
    expect(CalculateFibonacciNumber(4)).toBe(3);
    expect(CalculateFibonacciNumber(5)).toBe(5);
    expect(CalculateFibonacciNumber(6)).toBe(8);
    expect(CalculateFibonacciNumber(7)).toBe(13);
    expect(CalculateFibonacciNumber(8)).toBe(21);
    expect(CalculateFibonacciNumber(9)).toBe(34);
    expect(CalculateFibonacciNumber(10)).toBe(55);
  });

  test("Verificar que 2 es un número primo", () => {
    expect(isPrimeNumber(1)).toBe(false);
  });

  test("Verificar que 2 es un número primo", () => {
    expect(isPrimeNumber(2)).toBe(true);
  });

  test("Verificar que 3 es un número primo", () => {
    expect(isPrimeNumber(3)).toBe(true);
  });

  test("Verificar que 4 no es un número primo", () => {
    expect(isPrimeNumber(4)).toBe(false);
  });

  test("Verificar que 5 es un número primo", () => {
    expect(isPrimeNumber(5)).toBe(true);
  });

  test("Verificar que 6 no es un número primo", () => {
    expect(isPrimeNumber(6)).toBe(false);
  });

  test("Verificar que 7 es un número primo", () => {
    expect(isPrimeNumber(7)).toBe(true);
  });

  test("Verificar que 8 no es un número primo", () => {
    expect(isPrimeNumber(8)).toBe(false);
  });

  test("Verificar que 9 no es un número primo", () => {
    expect(isPrimeNumber(9)).toBe(false);
  });

  test("Verificar que 10 no es un número primo", () => {
    expect(isPrimeNumber(10)).toBe(false);
  });
});
