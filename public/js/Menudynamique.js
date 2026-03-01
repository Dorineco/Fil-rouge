{/* <nav id="mainNav" class="flex space-x-6 text-gray-300">
  <a href="Ressources.html" class="nav-link">Ressources</a>
  <a href="Contact.html" class="nav-link">Support</a>
  <a href="Inscription.html" id="signupLink" class="nav-link">Inscription</a>
  <a href="Login.html" id="loginLink" class="nav-link">Se connecter</a>
  <a href="EspaceMembre.html" id="memberLink" class="nav-link hidden">Espace membre</a>
  <a href="#" id="navLogout" class="nav-link hidden">Déconnexion</a>
</nav> */}

document.addEventListener("DOMContentLoaded", () => {
    const loginLink = document.getElementById("loginLink");
    const signupLink = document.getElementById("signupLink");
    const memberLink = document.getElementById("memberLink");
    const navLogout = document.getElementById("navLogout");

    // Vérifier si user est dans localStorage
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
        // Connecté → afficher Espace membre + Déconnexion, cacher Se connecter + Inscription
        loginLink.classList.add("hidden");
        signupLink.classList.add("hidden");
        memberLink.classList.remove("hidden");
        navLogout.classList.remove("hidden");
    } else {
        // Non connecté → afficher Se connecter + Inscription, cacher Espace membre + Déconnexion
        loginLink.classList.remove("hidden");
        signupLink.classList.remove("hidden");
        memberLink.classList.add("hidden");
        navLogout.classList.add("hidden");
    }

    // Déconnexion
    navLogout.addEventListener("click", () => {
        localStorage.removeItem("user");

        // Mettre à jour les liens
        loginLink.classList.remove("hidden");
        signupLink.classList.remove("hidden");
        memberLink.classList.add("hidden");
        navLogout.classList.add("hidden");

        // Redirection vers login
        window.location.href = "Login.html";
    });
});