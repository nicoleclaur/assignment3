/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 0;
let dayCounter = 0;

const dayButtons = {
    monday: document.getElementById('monday'),
    tuesday: document.getElementById('tuesday'),
    wednesday: document.getElementById('wednesday'),
    thursday: document.getElementById('thursday'),
    friday: document.getElementById('friday')
};

const clearButton = document.getElementById('clear-button'); 
const halfDayButton = document.getElementById('half'); 
const fullDayButton = document.getElementById('full'); 


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

Object.values(dayButtons).forEach(function(button) {
    button.addEventListener('click', toggleDay);
});

function toggleDay() {
    if (!this.classList.contains('clicked')) {
        this.classList.add('clicked');
        dayCounter++;
        updateTotalCost();
    }
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener('click', clearSelection);

function clearSelection() {
    Object.values(dayButtons).forEach(function(button) {
        button.classList.remove('clicked');
    });

    dayCounter = 0;
    costPerDay = 0;
    updateTotalCost();
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDayButton.addEventListener('click', clickHalfDay);

function clickHalfDay() {
    costPerDay = 20; 
    this.classList.add('clicked');
    fullDayButton.classList.remove('clicked');

    updateTotalCost();
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDayButton.addEventListener('click', function() {
    costPerDay = 35;

    this.classList.add('clicked');
    halfDayButton.classList.remove('clicked');

    updateTotalCost();
});


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

/********* calculate *********/
// Function to calculate the total cost
function updateTotalCost() {
    
    const totalCost = costPerDay * dayCounter;
    const calculatedCost = document.getElementById('calculated-cost');

    calculatedCost.innerHTML = totalCost.toFixed(2);
}
updateTotalCost();
