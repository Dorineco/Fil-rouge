// //<form id="loginForm">
//   <input type="email" id="email" placeholder="Email" required />
//   <input type="password" id="password" placeholder="Mot de passe" required />
//   <button type="submit">Se connecter</button>
// </form>
// <div id="loginMessage"></div>//

brancher le formulaire de connexion à l'API backend pour authentifier les utilisateurs et gérer les sessions.
Ce que ça fait

Intercepte le submit du formulaire

Envoie un POST vers ton API /api/login

Si succès :

Stocke l’objet user dans localStorage

Affiche message vert

Redirige vers EspaceMembre.html

Sinon : affiche message rouge

Tu peux ouvrir la console navigateur et taper :
JSON.parse(localStorage.getItem("user"))

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const messageDiv = document.getElementById("loginMessage");

    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        try {
            const res = await fetch("http://localhost:3000/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                // Stocker l'utilisateur dans localStorage
                localStorage.setItem("user", JSON.stringify(data.user));

                messageDiv.textContent = "Connexion réussie ! Redirection…";
                messageDiv.style.color = "green";

                // Rediriger après 1 seconde vers espace membre
                setTimeout(() => {
                    window.location.href = "EspaceMembre.html";
                }, 1000);
            } else {
                messageDiv.textContent = data.message || "Erreur inconnue";
                messageDiv.style.color = "red";
            }
        } catch (err) {
            console.error(err);
            messageDiv.textContent = "Erreur réseau ou serveur";
            messageDiv.style.color = "red";
        }
    });
});