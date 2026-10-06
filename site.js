const menu = document.querySelector('.menu');
menu?.addEventListener('click', () => {
 const nav = document.querySelector('#navigation');
 const open = nav.classList.toggle('open');
 menu.setAttribute('aria-expanded', String(open));
 menu.textContent = open ? 'Close' : 'Menu';
});
document.addEventListener('keydown', e => {if(e.key === 'Escape' && menu){document.querySelector('#navigation').classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='Menu';}});

const clientWindow = document.querySelector('.clients-window');
if (clientWindow && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
 const logos = [...clientWindow.querySelectorAll('.client-logo')];
 let frame;
 const highlightCenter = () => {
  const bounds = clientWindow.getBoundingClientRect();
  const center = bounds.left + bounds.width / 2;
  logos.forEach(logo => {
   const rect = logo.getBoundingClientRect();
   logo.classList.toggle('is-center', Math.abs(rect.left + rect.width / 2 - center) < 150);
  });
  frame = requestAnimationFrame(highlightCenter);
 };
 const observer = new IntersectionObserver(([entry]) => {
  cancelAnimationFrame(frame);
  if (entry.isIntersecting) highlightCenter();
 });
 observer.observe(clientWindow);
}
