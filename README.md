# SpendWise — PLP JavaScript Foundation (Week 5)

SpendWise is a simple personal budgeting dashboard. It helps a user enter a total budget and their expenses, then calculates how much money remains.

## Project files
- **index.html** — dashboard structure and the budget calculator button.
- **style.css** — colours, responsive layout, cards and button styling.
- **script.js** — JavaScript input, variables, validation, calculations and functions.

## JavaScript concepts implemented

### 1. Variables and data types
The calculator uses `const budget` and `const expenses` to store the amounts entered by the user. Both values are numbers. The remaining balance is also a number.

### 2. User input
When the user clicks **Calculate my budget**, JavaScript uses `prompt()` to ask for the total budget and total expenses. It checks that each entry is a valid, non-negative number. The user can cancel either prompt.

### 3. Calculations
The calculator subtracts expenses from the budget:

`remainingBalance = budget - expenses`

For example, a budget of KSh 40,000 and expenses of KSh 12,000 leaves KSh 28,000.

### 4. Reusable functions
- `getValidAmount()` collects and validates a number.
- `calculateBalance()` calculates the remaining balance.
- `displayBudgetResults()` prints a clearly labelled summary in the browser console.
- `runBudgetCalculator()` connects the input and calculation steps.

### 5. Displaying results
Open the dashboard, click **Calculate my budget**, enter the two amounts, then open the browser developer tools (F12) and select **Console**. The budget, expenses and remaining balance will appear with clear labels.

## How to run
1. Clone or download this repository.
2. Open the folder in VS Code.
3. Open `index.html` in a browser, preferably with the Live Server extension.
4. Click **Calculate my budget** and enter sample amounts.
5. Press F12 and check the Console for the results.

## Example test
- Budget: KSh 40,000
- Expenses: KSh 12,000
- Expected remaining balance: KSh 28,000

The figures shown in the dashboard are sample content. The calculator uses the amounts entered in the prompts.
