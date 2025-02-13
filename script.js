// Obtém o elemento do container principal
const container = document.getElementById('container');

// Obtém os botões de registro e login
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Adiciona um evento de clique ao botão de registro
registerBtn.addEventListener('click', () => {
    // Adiciona a classe "active" ao container quando o botão de registro é clicado
    // Isso faz com que o painel de registro seja exibido
    container.classList.add("active");
});

// Adiciona um evento de clique ao botão de login
loginBtn.addEventListener('click', () => {
    // Remove a classe "active" do container quando o botão de login é clicado
    // Isso faz com que o painel de login seja exibido
    container.classList.remove("active");
});

// Alternância de tema claro/escuro
const themeToggleBtn = document.getElementById('theme-toggle-btn');
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Modo Claro';
    } else {
        themeToggleBtn.textContent = 'Modo Escuro';
    }
});