// Dark Mode Toggle JavaScript (temporarily separated)

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const darkModeIcon = document.getElementById('dark-mode-icon');

    if (!darkModeToggle || !darkModeIcon) return;

    const enableDarkMode = () => {
        document.body.classList.add('dark-mode');
        darkModeToggle.classList.add('light');
        darkModeIcon.textContent = '☀️'; // Sun icon
    };

    const disableDarkMode = () => {
        document.body.classList.remove('dark-mode');
        darkModeToggle.classList.remove('light');
        darkModeIcon.textContent = '🌙'; // Moon icon
    };

    if (document.body.classList.contains('dark-mode')) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

    darkModeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
});
