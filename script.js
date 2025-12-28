function calculateEMI() {
    const principal = parseFloat(document.getElementById("principal").value);
    const annualRate = parseFloat(document.getElementById("rof").value);
    const tenure = parseInt(document.getElementById("tenure").value);

    if (isNaN(principal) || isNaN(annualRate) || isNaN(tenure)) {
        alert("Please fill all fields correctly.");
        return;
    }

    if (principal <= 0 || annualRate < 0 || tenure <= 0) {
        alert("Values must be greater than zero.");
        return;
    }

    const monthlyRate = annualRate / 12 / 100;
    let emi;

    if (monthlyRate === 0) {
        emi = principal / tenure;
    } else {
        emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
              (Math.pow(1 + monthlyRate, tenure) - 1);
    }

    const totalAmount = emi * tenure;
    const totalInterest = totalAmount - principal;

    // Display formatted values
    document.getElementById("emi").innerHTML = "₹ " + formatINR(emi);
    document.getElementById("bp").innerHTML = "₹ " + formatINR(principal);
    document.getElementById("bi").innerHTML = "₹ " + formatINR(totalInterest);
    document.getElementById("bt").innerHTML = "₹ " + formatINR(totalAmount);
}

function toggleTheme() {
    document.body.classList.toggle("dark");

    const btn = document.getElementById("themeBtn");
    if (document.body.classList.contains("dark")) {
        btn.innerText = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        btn.innerText = "🌙";
        localStorage.setItem("theme", "light");
    }
}

// Load saved theme
window.onload = function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        document.getElementById("themeBtn").innerText = "☀️";
    }
};

function formatINR(amount) {
    return amount.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}



