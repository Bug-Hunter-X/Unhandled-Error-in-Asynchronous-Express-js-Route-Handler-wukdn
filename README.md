# Unhandled Error in Asynchronous Express.js Route Handler

This repository demonstrates a common error in Node.js Express.js applications: forgetting to handle errors properly within asynchronous route handlers.  When an error occurs in the asynchronous operation, the server hangs and doesn't send a response to the client. This example shows the problematic code and its solution.

## Bug

The `bug.js` file contains an Express.js route that simulates an asynchronous operation.  If the simulated operation fails, an error is thrown, but there's no mechanism to catch and handle this error.  This results in the server not responding and effectively hanging.

## Solution

The `bugSolution.js` file demonstrates the correct way to handle errors.  The `async/await` syntax and a `try...catch` block ensure that errors are caught, and an appropriate response is sent to the client, preventing server hangs.