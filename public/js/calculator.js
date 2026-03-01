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