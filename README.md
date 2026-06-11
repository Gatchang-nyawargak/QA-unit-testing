# QA Unit Testing with Jest

A hands-on collection of Jest unit testing exercises covering 6 levels of QA testing skills — from basic assertions to mocking and real-world QA thinking.

## Test Results

```
Test Suites: 16 passed, 16 total
Tests:       58 passed, 58 total
```

## Project Structure

| File | Description |
|---|---|
| `basicAssertions.js` | Q1: Sum function |
| `isAdult.js` | Q2: Age validation |
| `reverseString.js` | Q3: String reversal |
| `discountEligibility.js` | Q4: Discount threshold |
| `usernameValidation.js` | Q5: Username length validation |
| `gradeCalculator.js` | Q6: Score to grade mapping |
| `userCreation.js` | Q7: Object creation |
| `shoppingCart.js` | Q8: Array manipulation |
| `findUser.js` | Q9: Array search |
| `division.js` | Q10: Exception on divide by zero |
| `passwordValidation.js` | Q11: Password length check |
| `notificationService.js` | Q12: Mocking with jest.fn() |
| `apiCall.js` | Q13: Async mocking |
| `bankWithdrawal.js` | Q14: Bank withdrawal logic |
| `mobileMoneyTransfer.js` | Q15: Mobile money transfer |
| `registerUser.js` | Challenge: Full user registration |

## Levels Covered

- **Level 1 – Basic Assertions:** Simple input/output verification
- **Level 2 – Boundary Testing:** Edge values just below, at, and above thresholds
- **Level 3 – Objects and Arrays:** Verifying object shape and array mutations
- **Level 4 – Exception Testing:** Testing that errors are thrown correctly
- **Level 5 – Mocking:** Using `jest.fn()` and `mockResolvedValue` to isolate dependencies
- **Level 6 – Real QA Thinking:** Positive, negative, boundary, and edge case coverage

## Getting Started

### Prerequisites
- Node.js installed

### Install dependencies

```bash
npm install
```

### Run all tests

```bash
npx jest
```

### Run a specific test file

```bash
npx jest bankWithdrawal.test.js
```

### Run with coverage

```bash
npx jest --coverage
```
