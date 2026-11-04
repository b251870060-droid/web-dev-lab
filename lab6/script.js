// Dark Mode (Хар горим) солих товчны логик
const themeToggleBtn = document.getElementById('theme-toggle');

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        // body элемент дээр 'dark-mode' классыг нэмэх/хасах
        document.body.classList.toggle('dark-mode');
        
        // Хэрэглэгчийн сонголтыг санах ойд хадгалах
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.textContent = '☀️'; // Шөнө үед нарны дүрс гарна
        } else {
            localStorage.setItem('theme', 'light');
            themeToggleBtn.textContent = '🌙'; // Өдөр үед сарны дүрс гарна
        }
    });
}

// Хуудас ачаалагдахад өмнө нь сонгосон байсан горимыг шалгаж сэргээх
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeToggleBtn) {
            themeToggleBtn.textContent = '☀️';
        }
    }
});