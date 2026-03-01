// Menu burger
const burger = document.getElementById("burgerBtn");
const menu = document.getElementById("Menu");
const lines = burger.querySelectorAll(".burger-line");// renvoie une NodeList

burger.addEventListener("click", () => {
    menu.classList.toggle("hidden"); // toggle la visibilité

    // Burger → croix
    lines[0].classList.toggle("rotate-45");
    lines[0].classList.toggle("translate-y-1.5");

    lines[1].classList.toggle("opacity-0");

    lines[2].classList.toggle("-rotate-45");
    lines[2].classList.toggle("-translate-y-1.5");
});


//***********************************************************************//

// Calculatrice//

document.addEventListener("DOMContentLoaded", () => { //attend que tout soit prêt avant d'exécuter//

    const form = document.querySelector("form"); 
    const result = document.getElementById("result");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); //empêche la page de se recharger//

        // Récupération simple
        let capital = parseFloat(document.getElementById("capital").value); //convertit la chaine en nombre//
        let monthly = parseFloat(document.getElementById("monthlysavings").value);
        let years = parseFloat(document.getElementById("invest_time").value);
        let rate = parseFloat(document.getElementById("interest_rate").value);
        let interval = parseInt(document.getElementById("intervalle").value);


        // Defaults pour éviter les Not a Number
        if (isNaN(capital)) capital = 0; //valeur par défaut
        if (isNaN(monthly)) monthly = 0;
        if (isNaN(years)) years = 0;
        if (isNaN(rate)) rate = 0;
        if (isNaN(interval) || interval < 1) interval = 1;

        // conversion des paramètres
        const annualRate = rate / 100;
        const totalMonths = Math.round(years * 12); //méthode qui arrondit la fraction//
        const facteur = Math.pow(1 + annualRate, interval / 12);


//boucle calcul mois par mois//

        let total = capital;
        let counter = 0;//

        for (let m = 0; m < totalMonths; m++) {
            total += monthly;
            counter++;

            if (counter >= interval) {
                total *= facteur;
                counter = 0;
            }
        }

//Affichage formaté du résultat avec espace tous les milliers et 2 décimales//
        result.textContent = total.toLocaleString("fr-FR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }) + " €";

    
    });
document.getElementById("test").innerText=`TESTDuis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur...`

});

document.getElementById("test").innerText=`TESTDuis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur...`

//***********************************************************************//

// Login enregistré en localStorage//

document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const loginBtn = document.getElementById("loginBtn");
    const logoutBtn = document.getElementById("logoutBtn");



    loginBtn.addEventListener("click", () => {
        const user = emailInput.value.trim();
        const pass = passwordInput.value.trim();
        localStorage.setItem("email", user);
        localStorage.setItem("password", pass); // juste pour démo
        alert("Connexion réussie !");
        window.location.href = "espaceMembre.html";
    });

    logoutBtn.addEventListener("click", () => {
        localStorage.clear();
        alert("Vous êtes déconnecté !");
    });
});
