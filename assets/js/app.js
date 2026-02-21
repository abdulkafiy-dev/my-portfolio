// Navigation Bar
const navBar = document.querySelector('.navbar-nav');

// Toggle Button
const toggleBtn = document.querySelector('#toggle-btn');

// Toggling Function
const toggleSideMenu = (e) => {
    e.stopPropagation();
    navBar.classList.toggle('sidenav');
    toggleBtn.classList.toggle('times-icon');
}

// Bind to Event
toggleBtn.addEventListener('click', toggleSideMenu);

// Close Navbar When Clicked Out
document.addEventListener('click', () => {
    if (navBar.classList.contains('sidenav')) {
        navBar.classList.remove('sidenav');
    }
    if (toggleBtn.classList.contains('times-icon')) {
        toggleBtn.classList.remove('times-icon');
    }
});

// Theme Toggle
const themeSwitch = document.querySelector('#theme-checkbox');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

themeSwitch.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');

    if (theme === 'dark') {
        theme = 'light';
    } else {
        theme = 'dark';
    }

    document.documentElement.setAttribute('data-theme', theme);

    localStorage.setItem('theme', theme);

});

