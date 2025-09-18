let portionAmount = 4;

// Get refferences to portion control buttons and portion showcase number
let plusBtn = document.querySelector("#plus-btn");
let minusBtn = document.querySelector("#minus-btn");
let portionIndicator = document.querySelector("#portion-count");

let portions = document.querySelectorAll(".portion");

// before the loop    
// conditional check every loop   
// incremental statement run at the end of each loop (before conditional check)

let originalAmounts = [];

for (let i = 0; i < portions.length; i=i+1) {
    originalAmounts.push(portions[i].textContent);
}
console.log(originalAmounts);

// Update portion indicator to match our default portion amount
updatePortion();

// update website to show current portionAmount
function updatePortion() {
    portionIndicator.textContent = portionAmount;


    for (let i = 0; i < portions.length; i=i+1) {
        portions[i].textContent = originalAmounts[i] * portionAmount;
    }


}

function addPortion() {
    portionAmount++; //increment portion by 1
    updatePortion();
}

function subtractPortion() {
    if (portionAmount <= 1) {
        console.log("tried subtraction portion, but can't go any lower")
    }
    else {
        portionAmount--; // lower portion by 1
        updatePortion();
    }
}

plusBtn.addEventListener("click", addPortion);
minusBtn.addEventListener("click", subtractPortion);