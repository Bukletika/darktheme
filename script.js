function addDarkClassToHTML() {
    if (localStorage.getItem('theme') === 'dark') {
        document.querySelector('html').classList.add('dark');
        document.querySelector('.switcher__toggle span').textContent = 'dark_mode';
    } else {
        document.querySelector('html').classList.remove('dark');
        document.querySelector('.switcher__toggle span').textContent = 'wb_sunny';
    }
}

document.querySelector('.switcher__toggle').addEventListener('click', (evt) => {
    evt.preventDefault();

    if (localStorage.getItem('theme') === 'dark') {
        localStorage.removeItem('theme');
    } else {
        localStorage.setItem('theme', 'dark');
    }

    addDarkClassToHTML();
});

addDarkClassToHTML();