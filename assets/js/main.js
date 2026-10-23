    // Set dynamic current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Dark Mode Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    themeToggleBtn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
    });

    // Mobile Navigation Toggle
    const menuToggleBtn = document.getElementById('menu-toggle');
    const primaryNav = document.getElementById('primary-nav');
    menuToggleBtn.addEventListener('click', () => {
      const isExpanded = menuToggleBtn.getAttribute('aria-expanded') === 'true';
      menuToggleBtn.setAttribute('aria-expanded', !isExpanded);
      primaryNav.classList.toggle('hidden');
      primaryNav.classList.toggle('flex');
    });

    // Mobile Mega Menu Toggle
    const megaTrigger = document.getElementById('mega-trigger');
    const megaMenu = document.getElementById('services-mega');
    megaTrigger.addEventListener('click', () => {
      const isExpanded = megaTrigger.getAttribute('aria-expanded') === 'true';
      megaTrigger.setAttribute('aria-expanded', !isExpanded);
      megaMenu.classList.toggle('hidden');
      megaMenu.classList.toggle('grid');
    });
