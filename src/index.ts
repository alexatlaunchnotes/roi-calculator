import gsap from 'gsap';

// Variables
let annualSalary: number | undefined;
let numberOfEmployees: number | undefined;
let moneySpentAnnually: number | undefined;
let timeSpentOnProductChanges: number | undefined;
let productionTime: number | undefined;
let productChangeCost: number | undefined;
let moneySaved: number | undefined;
let daysSaved: number | undefined;
let count = 0;

// Get references to form elements and buttons
const form = document.getElementById("roi-calculator") as HTMLFormElement;
const nextButton = document.getElementById("next") as HTMLDivElement;
const prevButton = document.getElementById("previous") as HTMLDivElement;
const submitButton = document.getElementById("submit") as HTMLDivElement;
const formWrapper = document.getElementById("roi-form") as HTMLDivElement;
const results = document.getElementById("roi-results") as HTMLDivElement;

const init = () => {
    
    // Event listeners
    nextButton.addEventListener('click', handleNextButtonClick)
    nextButton.addEventListener('touchstart', handleNextButtonClick)
    submitButton.addEventListener('click', handleSubmitButtonClick)
    submitButton.addEventListener('touchstart', handleSubmitButtonClick)
    prevButton.addEventListener('click', handlePreviousButtonClick)
    prevButton.addEventListener('touchstart', handlePreviousButtonClick)

    function handleNextButtonClick(event: Event) {
        event.preventDefault()
        count += 1;
        console.log(count)

        updateNavigationButtons()

        // Get the form inputs
        const salaryInput = document.getElementById("annual-salary") as HTMLInputElement
        const employeesInput = document.getElementById("number-of-employees") as HTMLInputElement
        const timeInput = document.getElementById("time-spent") as HTMLInputElement

        // Update the variable values
        annualSalary = parseFloat(salaryInput.value);
        numberOfEmployees = parseFloat(employeesInput.value);
        }
    }

    function handleSubmitButtonClick(event: Event) {
        event.preventDefault()

        const timeInput = document.getElementById("time-spent") as HTMLInputElement
        timeSpentOnProductChanges = parseFloat(timeInput.value);

        // Calculate the values
        calculateMoneySpentAnnually();
        calculateProductionTime();
        caclulateProductChangeCost();
        calculateMoneySaved();
        calculateDaysSaved();

        updateResults()
    }

    function handlePreviousButtonClick(event: Event) {
        event.preventDefault()
        count -= 1
        console.log(count)
        updateNavigationButtons()
    }

    function updateResults() {
        const productChangeCostElement = document.getElementById("product-change-cost") as HTMLElement;
        const moneySavedElement = document.getElementById("money-saved") as HTMLElement;
        const daysSavedElement = document.getElementById("days-saved") as HTMLElement;

        productChangeCostElement.textContent = productChangeCost?.toLocaleString() || "";
        moneySavedElement.textContent = moneySaved?.toLocaleString() || "";
        daysSavedElement.textContent = daysSaved?.toLocaleString() || "";
    }

    function calculateMoneySpentAnnually() {
        if (annualSalary && numberOfEmployees) moneySpentAnnually = annualSalary * numberOfEmployees
    }

    function calculateProductionTime() {
        if (timeSpentOnProductChanges && numberOfEmployees) productionTime = timeSpentOnProductChanges / (5 * numberOfEmployees)
    }

    function caclulateProductChangeCost() {
        if (moneySpentAnnually && productionTime) productChangeCost = moneySpentAnnually * productionTime
    }

    function calculateMoneySaved() {
        if (productChangeCost) moneySaved = productChangeCost * 0.3
    }

    function calculateDaysSaved() {
        if (timeSpentOnProductChanges && numberOfEmployees) daysSaved = (timeSpentOnProductChanges * numberOfEmployees) * 0.3
    }

    function updateNavigationButtons() {
        if (count == 0) {
            prevButton.style.display = "none";
            nextButton.style.display = "flex";
        } else if (count === 3) {
            prevButton.style.display = "flex";
            nextButton.style.display = "none";
        } else {
            prevButton.style.display = "flex";
            nextButton.style.display = "flex";
        }
}

document.addEventListener("DOMContentLoaded", init)