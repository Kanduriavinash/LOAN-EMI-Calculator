function calculateEMI(){
    const principal=parseFloat(document.getElementById("principal").value);
    const annualRate=parseFloat(document.getElementById("rof").value);
    const tenure=parseInt(document.getElementById("tenure").value);

    if(isNaN(principal) || isNaN(annualRate) || isNaN(tenure)){
        alert("Please Fill all the fields with valid numbers.");
        return;
    }

    if(principal<=0 || annualRate<0 || tenure<=0){
        alert("values must be greater than zero.");
        return;
    }

    //converting annual interest rate to monthly rate.
    const monthlyRate=annualRate/12/100;
    let emi;

    if(monthlyRate==0){
        emi=principal/tenure;
    }
    else{
        emi=(principal*monthlyRate*Math.pow(1+monthlyRate,tenure))/(Math.pow(1+monthlyRate,tenure)-1);

    }

    document.getElementById("emi").innerHTML="₹ "+ emi.toFixed(2);

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
