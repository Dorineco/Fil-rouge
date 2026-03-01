{/* <form id="loginForm">
  <input type="email" id="email" placeholder="Email" required />
  <input type="password" id="password" placeholder="Mot de passe" required />
  <button type="submit" id="loginBtn">Se connecter</button>
  <button type="button" id="logoutBtn">Déconnexion</button>
</form>

<div id="loginMessage"></div> */}





document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginMessage = document.getElementById("loginMessage");
    const logoutBtn = document.getElementById("logoutBtn");

    // Connexion
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
                // Stocker l'utilisateur
                localStorage.setItem("user", JSON.stringify(data.user));

                loginMessage.textContent = "Connexion réussie ! Redirection…";
                loginMessage.style.color = "green";

                setTimeout(() => {
                    window.location.href = "EspaceMembre.html";
                }, 1000);
            } else {
                loginMessage.textContent = data.message || "Erreur inconnue";
                loginMessage.style.color = "red";
            }
        } catch (err) {
            console.error(err);
            loginMessage.textContent = "Erreur réseau ou serveur";
            loginMessage.style.color = "red";
        }
    });

    // Déconnexion
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("user");
        loginMessage.textContent = "Vous êtes déconnecté !";
        loginMessage.style.color = "orange";

        setTimeout(() => {
            window.location.href = "Login.html";
        }, 1000);
    });

    // Si déjà connecté, afficher un message
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
        loginMessage.textContent = "Utilisateur déjà connecté";
        loginMessage.style.color = "blue";
    }
});