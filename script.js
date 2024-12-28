document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Dark Mode';
    document.body.prepend(toggleButton);

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});

// Add dark mode styles in CSS
/*
body.dark-mode {
    background-color: #121212;
    color: white;
}
*/
