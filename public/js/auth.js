fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        email,
        password
    })
});
// Comment le front parle au back. « Le front consomme une API REST développée en Node.js / Express. 
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