// Ativar links do menu

function AtivarLinkMenu() {
  const links = document.querySelectorAll('.header-menu a');
  function verificarLink(link) {
    const url = location.href;
    const href = link.href;
    if(url.includes(href)) {
      link.classList.add('ativo');
    };
  };
  links.forEach(verificarLink)
};
AtivarLinkMenu();



// Ativar animação ao scroll

function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.8
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if (isSectionVisible) {
            section.classList.add('ativo');
        } else {
          section.classList.remove('ativo');
        };
      });
    };
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  };
};
initAnimacaoScroll();