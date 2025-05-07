const headerElement = document.getElementById('headerElement');

if (headerElement) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      headerElement.classList.add('scroll-down');
    } else {
      headerElement.classList.remove('scroll-down');
    }
  }, { passive: true });
}
