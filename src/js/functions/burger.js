import _vars from '../_vars';


(function(){
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const links = document?.querySelectorAll('.header__menu-link');

  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('active');
    menu?.classList.toggle('active');
    _vars.bodyEl.classList.toggle('overflow-h');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      burger?.classList.remove('active')
      menu?.classList.remove('active')
      _vars.bodyEl?.classList.remove('overflow-h')
    })
  });
})();
