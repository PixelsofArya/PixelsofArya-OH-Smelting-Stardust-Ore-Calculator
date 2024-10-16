function validateOreInput() {
    const oreInput = document.getElementById('stardustOre');
    const fuelInput = document.getElementById('portableFuel');
    const resultText = document.getElementById('result');

    // Clear the other input when one is filled
    if (oreInput.value) {
        fuelInput.value = ''; // Clear fuel input
    }

    const oreValue = parseInt(oreInput.value);
    if (!isNaN(oreValue) && oreValue > 0) {
        // Get the nearest lower multiple of 50 or default to 50 if below
        const nearestValidOre = oreValue < 50 ? 50 : Math.floor(oreValue / 50) * 50;
        const fuelNeeded = (nearestValidOre / 50) * 15;
        resultText.innerText = `You need ${fuelNeeded} Portable Mixed Fuel for ${nearestValidOre} Stardust Ore.`;
    } else {
        resultText.innerText = '';
    }
}

function validateFuelInput() {
    const oreInput = document.getElementById('stardustOre');
    const fuelInput = document.getElementById('portableFuel');
    const resultText = document.getElementById('result');

    // Clear the other input when one is filled
    if (fuelInput.value) {
        oreInput.value = ''; // Clear ore input
    }

    const fuelValue = parseInt(fuelInput.value);
    if (!isNaN(fuelValue) && fuelValue > 0) {
        // Get the nearest lower multiple of 15 or default to 15 if below
        const nearestValidFuel = fuelValue < 15 ? 15 : Math.floor(fuelValue / 15) * 15;
        const oreNeeded = (nearestValidFuel / 15) * 50;
        resultText.innerText = `You need ${oreNeeded} Stardust Ore for ${nearestValidFuel} Portable Mixed Fuel.`;
    } else {
        resultText.innerText = '';
    }
}
