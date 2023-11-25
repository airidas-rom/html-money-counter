document.addEventListener("DOMContentLoaded", () => {
    const centsInputs = document.querySelectorAll(".cents-container input[type='number']");
    const paperInputs = document.querySelectorAll(".paper-container input[type='number']");
    const totalSpan = document.getElementById("total");

    function calculateTotal() {
        let totalAmount = 0;

        centsInputs.forEach((input, index) => {
            const denominationValue = getCentsDenominationValue(index);
            totalAmount += (parseFloat(input.value) || 0) * denominationValue;
        });

        paperInputs.forEach((input, index) => {
            const denominationValue = getPaperDenominationValue(index);
            totalAmount += (parseInt(input.value) || 0) * denominationValue;
        });

        totalSpan.textContent = totalAmount.toFixed(2);
    }

    function getCentsDenominationValue(index) {
        const centsDenominations = [0.01, 0.02, 0.05, 0.10, 0.20, 0.50, 1, 2];
        return centsDenominations[index] || 0;
    }

    function getPaperDenominationValue(index) {
        const paperDenominations = [5, 10, 20, 50, 100];
        return paperDenominations[index] || 0;
    }

    centsInputs.forEach(input => {
        input.addEventListener("input", calculateTotal);
    });

    paperInputs.forEach(input => {
        input.addEventListener("input", calculateTotal);
    });
});
