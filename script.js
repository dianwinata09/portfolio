document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    // Check for saved user theme preference
    const currentTheme = localStorage.getItem('theme') || 'light-mode';
    document.body.classList.add(currentTheme);

    // Update the icon based on the current theme
    updateIcon(currentTheme);

    themeToggleBtn.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
            updateIcon('light-mode');
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            updateIcon('dark-mode');
        }
    });

    function updateIcon(theme) {
        if (theme === 'dark-mode') {
            themeIcon.setAttribute('d', 'M12 3V5.25M18.364 5.636L16.773 7.227M21 12H18.75M18.364 18.364L16.773 16.773M12 18.75V21M7.227 16.773L5.636 18.364M5.25 12H3M7.227 7.227L5.636 5.636M15.75 12C15.75 12.9946 15.3549 13.9484 14.6517 14.6517C13.9484 15.3549 12.9946 15.75 12 15.75C11.0054 15.75 10.0516 15.3549 9.34835 14.6517C8.64509 13.9484 8.25 12.9946 8.25 12C8.25 11.0054 8.64509 10.0516 9.34835 9.34835C10.0516 8.64509 11.0054 8.25 12 8.25C12.9946 8.25 13.9484 8.64509 14.6517 9.34835C15.3549 10.0516 15.75 11.0054 15.75 12Z');
        } else {
            themeIcon.setAttribute('d', 'M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z');
        }
    }
});

//image//

// Panggil fungsi pertama kali untuk mengatur gambar sesuai dengan mode saat ini
changeImageMode();

// Tambahkan event listener untuk memantau perubahan mode
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    isDarkMode = e.matches;
    changeImageMode();
});

// Tambahkan event listener untuk toggle tema
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    // Ubah nilai isDarkMode menjadi kebalikannya
    isDarkMode = !isDarkMode;
    // Panggil fungsi changeImageMode() untuk mengatur ulang tampilan gambar
    changeImageMode();
});
document.querySelector('.navbar-toggle').addEventListener('click', () => {
    document.querySelector('.navbar-menu').classList.toggle('active');
    document.querySelector('.navbar-toggle').classList.toggle('active');
});
