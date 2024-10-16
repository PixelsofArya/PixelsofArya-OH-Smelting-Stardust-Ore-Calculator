// Function to validate Stardust Ore input and ensure it's a multiple of 50
function validateOreInput() {
    const oreInput = document.getElementById("stardustOre");
    let ore = parseFloat(oreInput.value);
    const resultText = document.getElementById("result");

    if (oreInput.value === "") {
        resultText.innerHTML = ""; // Clear result if input is empty
        return;
    }

    // Round the input down to the nearest multiple of 50
    if (ore < 50) {
        ore = 50; // Minimum is 50
    } else {
        ore = Math.floor(ore / 50) * 50;
    }

    // Calculate fuel needed and display result
    calculateFuel(ore);
}

// Function to validate Fuel input and calculate Stardust Ore needed
function validateFuelInput() {
    const fuelInput = document.getElementById("portableFuel");
    let fuel = parseFloat(fuelInput.value);
    const resultText = document.getElementById("result");

    if (fuelInput.value === "") {
        resultText.innerHTML = ""; // Clear result if input is empty
        return;
    }

    // Round down to nearest multiple of 15 since 15 fuel crafts 50 ore
    if (fuel < 15) {
        fuel = 15; // Minimum is 15
    } else {
        fuel = Math.floor(fuel / 15) * 15;
    }

    // Calculate Stardust Ore and display result
    calculateOre(fuel);
}

// Function to calculate fuel needed based on Stardust Ore input
function calculateFuel(ore) {
    const fuelNeeded = (ore / 50) * 15;
    document.getElementById("result").innerHTML = `You need ${fuelNeeded} Portable Mixed Fuel for ${ore} Stardust Ore.`;
}

// Function to calculate Stardust Ore based on Portable Mixed Fuel input
function calculateOre(fuel) {
    const oreNeeded = (fuel / 15) * 50;
    document.getElementById("result").innerHTML = `You can craft ${oreNeeded} Stardust Ore with ${fuel} Portable Mixed Fuel.`;
}
