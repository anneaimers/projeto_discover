const root = document.documentElement;
const toggle = document.getElementById('themeSwitch');
const media = window.matchMedia('(prefers-color-scheme: dark)');

function applyTheme(theme) {
  root.dataset.theme = theme;
  const isDark = theme === 'dark';

  toggle.setAttribute('aria-checked', String(isDark));
  toggle.setAttribute('aria-label', isDark ? 'Ativar tema claro' : 'Ativar tema escuro');
}

applyTheme(root.dataset.theme === 'dark' ? 'dark' : 'light');

toggle.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('theme', next);
});

// Segue o sistema enquanto o usuário não escolher manualmente
media.addEventListener('change', (event) => {
  if (!localStorage.getItem('theme')) {
    applyTheme(event.matches ? 'dark' : 'light');
  }
});
