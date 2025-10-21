// Smooth scroll for internal anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(href.length > 1){
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
    }
  });
});

// Small helper: add current year to footer (keeps page up-to-date)
(function(){
  const f = document.querySelector('footer small');
  if(f) f.textContent = f.textContent + ' • ' + new Date().getFullYear();
})();