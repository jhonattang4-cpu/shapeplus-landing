document.addEventListener('DOMContentLoaded', function(){
  const langSelect = document.getElementById('langSelect');
  const userLang = navigator.language.startsWith('es') ? 'es' : (navigator.language.startsWith('en') ? 'en' : 'pt-BR');
  langSelect.value = userLang;
  fetch('assets/lang/' + (userLang.startsWith('pt') ? 'pt' : userLang) + '.json').then(r=>r.json()).then(data=>{
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(data[key]) el.innerHTML = data[key];
    });
  }).catch(()=>{});
  langSelect.addEventListener('change', (e)=>{
    fetch('assets/lang/' + (e.target.value.startsWith('pt') ? 'pt' : e.target.value) + '.json').then(r=>r.json()).then(data=>{
      document.querySelectorAll('[data-i18n]').forEach(el=>{
        const key = el.getAttribute('data-i18n');
        if(data[key]) el.innerHTML = data[key];
      });
    });
  });
  document.getElementById('lead') && document.getElementById('lead').addEventListener('submit', function(e){ e.preventDefault(); const email = document.getElementById('email').value; if(!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ alert('Digite um e-mail válido.'); return; } alert('Obrigado! Em breve enviaremos o link para ' + email); this.reset(); });
});