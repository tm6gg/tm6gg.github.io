function themeLoad() {
    const theme = localStorage.getItem('theme');
    if (theme == 'light') {
        document.documentElement.classList.remove('dark');
    } else if (theme == 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        localStorage.setItem('theme', 'dark');
        themeLoad();
    }
}

function toggleTheme() {
    const theme = localStorage.getItem('theme');
    if (theme == 'light') {
        localStorage.setItem('theme', 'dark');
    } else if (theme == 'dark') {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'light');
    }
    themeLoad();
}

themeLoad();