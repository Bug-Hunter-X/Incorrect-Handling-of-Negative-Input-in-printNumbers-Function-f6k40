# TypeScript Bug: Incorrect Handling of Negative Input

This repository demonstrates a bug in a TypeScript function that incorrectly handles negative input. The `printNumbers` function is intended to print numbers from 1 to n, but it fails to handle negative values of n. 

## Bug Description

The `printNumbers` function does not perform any error checking. When a negative number is passed as input, the for loop condition `i <= n` will always evaluate to false. The result is that the function silently does nothing, which is unexpected and error-prone.

## Bug Reproduction

1. Clone this repository.
2. Navigate to the root directory.
3. Run `tsc bug.ts` to compile the code.
4. Run `node bug.js` to execute the code.
5. Observe that the function fails to print any numbers when negative input is provided.

## Solution

The solution involves adding error handling to check for negative input. The improved function either throws an error or gracefully handles the negative input based on requirements.