
const themeToggleBtn = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function setTheme(isDark) {
    document.body.classList.toggle('dark', isDark);
    themeToggleBtn.innerHTML = isDark ? '<span>Toggle Light</span>' : '<span>Toggle Dark</span>';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
function toggleTheme() {
    const isDark = !document.body.classList.contains('dark');
    setTheme(isDark);
}
themeToggleBtn.addEventListener('click', toggleTheme);
(function () {
    const savedTheme = localStorage.getItem('theme');
    const useDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setTheme(useDark);
})();

