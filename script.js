// Dark mode toggle
const toggle = document.getElementById('themeToggle');
const printBtn = document.getElementById('printBtn');
const printBtnFooter = document.getElementById('printBtnFooter');

// Persist theme in localStorage
const THEME_KEY = 'prefers-dark';
function setTheme(dark){
  document.documentElement.classList.toggle('dark', !!dark);
  localStorage.setItem(THEME_KEY, dark ? '1' : '0');
  toggle?.setAttribute('aria-pressed', dark ? 'true' : 'false');
}
(function initTheme(){
  const saved = localStorage.getItem(THEME_KEY);
  if(saved === null){
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefers);
  }else{
    setTheme(saved === '1');
  }
})();
toggle?.addEventListener('click', ()=>{
  const isDark = document.documentElement.classList.contains('dark');
  setTheme(!isDark);
});

// Smooth section highlight
const links = Array.from(document.querySelectorAll('.nav-list a'));
const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    const id = '#' + e.target.id;
    const link = links.find(a => a.getAttribute('href')===id);
    if(e.isIntersecting){
      links.forEach(a=>a.classList.remove('active'));
      link && link.classList.add('active');
    }
  });
},{threshold:0.3});
sections.forEach(sec=>obs.observe(sec));

// Print/Export
function doPrint(){ window.print(); }
printBtn?.addEventListener('click', doPrint);
printBtnFooter?.addEventListener('click', doPrint);
