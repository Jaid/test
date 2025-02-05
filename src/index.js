/** @module test */

/**
 * Adds second argument to first argument
 * @param {number} firstNumber First number
 * @param {number} [secondNumber=1] Second number
 * @return {number} The sum of both arguments
 * @example
 * import test from "test"
 * const firstNumber = 5
 * const secondNumber = 7
 * const result = test(firstNumber, secondNumber)
 * result === 12
 * @example
 * import test from "test"
 * const number = 5
 * const result = test(number)
 * result === 6
 */
export default (firstNumber, secondNumber = 2) => firstNumber + secondNumber