// Aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", function() {
    // Obtém o elemento com id 'google'
    const googleButton = document.getElementById("google");

    // Adiciona o evento de clique ao botão
    googleButton.addEventListener("click", function() {
        // URL de login do Google (a URL de autenticação pode variar conforme as configurações)
        const googleLoginUrl = "https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=token&scope=email";

        // Redireciona para o login do Google
        window.location.href = googleLoginUrl;
    });
});
