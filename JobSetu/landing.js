const workflowTabs = [...document.querySelectorAll('.js-tabs [role="tab"]')];
function selectWorkflow(tab) {
  workflowTabs.forEach(item => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
  });
}
workflowTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectWorkflow(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % workflowTabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + workflowTabs.length) % workflowTabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = workflowTabs.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    selectWorkflow(workflowTabs[next]);
    workflowTabs[next].focus();
  });
});
// Close the mobile menu after an in-page navigation choice.
document.querySelectorAll('#navigation a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navigation').classList.remove('open');
    const toggle = document.querySelector('.menu');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = 'Menu';
  });
});
