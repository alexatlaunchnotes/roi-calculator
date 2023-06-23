import { calculateMoneySaved} from './calculator'


// Variables
let averageAnnualSalary: number = 137000;
let numberOfEmployees: number | undefined;
let moneySaved: number | undefined;
let timeSavedPercentage: number = 0.24;
let count = 0;

// Get references to form elements and buttons
const form = document.getElementById("roi-calculator") as HTMLFormElement;
const nextButton = document.getElementById("next") as HTMLDivElement;
const prevButton = document.getElementById("previous") as HTMLDivElement;
const submitButton = document.getElementById("submit") as HTMLInputElement;

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

        updateNavigationButtons()

        // Get the form inputs
        const employeesInput = document.getElementById("number-of-employees") as HTMLInputElement

        // Update the variable values
        numberOfEmployees = parseFloat(employeesInput.value);
        }
    }

    function handleSubmitButtonClick(event: Event) {
        const formData = getFormData(form, moneySaved)
        console.log(formData)

        // Calculate the values
        if (numberOfEmployees) moneySaved = calculateMoneySaved(timeSavedPercentage, numberOfEmployees, averageAnnualSalary);
        console.log(moneySaved)
        if (moneySaved) updateResults(moneySaved)
    }

    function handlePreviousButtonClick(event: Event) {
        event.preventDefault()
        count -= 1
        console.log(count)
        updateNavigationButtons()
    }

    function updateResults(moneySaved: number) {
        const moneySavedElement = document.getElementById("money-saved") as HTMLElement;

        moneySavedElement.textContent = moneySaved.toLocaleString() || "";
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

export function getFormData(form: HTMLFormElement, defaultData: any) {
    const input = document.getElementById("number-of-employees") as HTMLInputElement;

    if (input) {
        const value = parseFloat(input.value);
        return isNaN(value) ? null : value;
      }

    return null
  }
  
document.addEventListener("DOMContentLoaded", init)