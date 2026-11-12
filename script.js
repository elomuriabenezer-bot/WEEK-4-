// SpendWise budget calculator
// Variables store the user's budget and expenses.

function calculateBalance(budget, expenses) {
  return budget - expenses;
}

function getValidAmount(message) {
  const input = window.prompt(message);

  if (input === null) {
    return null;
  }

  const amount = Number(input);

  if (input.trim() === "" || !Number.isFinite(amount) || amount < 0) {
    window.alert("Please enter a valid amount of 0 or more.");
    return getValidAmount(message);
  }

  return amount;
}

function displayBudgetResults(budget, expenses) {
  const remainingBalance = calculateBalance(budget, expenses);

  console.log("----- SpendWise Budget Summary -----");
  console.log("Total budget: KSh " + budget.toLocaleString("en-KE"));
  console.log("Total expenses: KSh " + expenses.toLocaleString("en-KE"));
  console.log("Remaining balance: KSh " + remainingBalance.toLocaleString("en-KE"));

  if (remainingBalance < 0) {
    console.log("Notice: You have exceeded your budget.");
  } else {
    console.log("Good work! You are within your budget.");
  }
  console.log("------------------------------------");
}

function runBudgetCalculator() {
  // const values are not reassigned after the user enters them.
  const budget = getValidAmount("Enter your total budget in KSh:");
  if (budget === null) {
    console.log("Budget calculation cancelled.");
    return;
  }

  const expenses = getValidAmount("Enter your total expenses in KSh:");
  if (expenses === null) {
    console.log("Budget calculation cancelled.");
    return;
  }

  displayBudgetResults(budget, expenses);
}

document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = document.getElementById("run-budget-check");

  if (calculateButton) {
    calculateButton.addEventListener("click", runBudgetCalculator);
  }
});
