
document.addEventListener('DOMContentLoaded', function(){
  const langSelect = document.getElementById('langSelect');
  const stored = localStorage.getItem('shape_lang');
  const userLang = stored || (navigator.language.startsWith('es') ? 'es' : (navigator.language.startsWith('en') ? 'en' : 'pt-BR'));
  langSelect.value = userLang;
  loadLang(userLang);
  langSelect.addEventListener('change', (e)=>{ localStorage.setItem('shape_lang', e.target.value); loadLang(e.target.value); });

  document.querySelectorAll('[data-link]').forEach(btn=> btn.addEventListener('click', ()=>{ const dest = btn.getAttribute('data-link'); if(dest.startsWith('#')) window.location.href = dest; else window.location.href = dest; }));

  document.getElementById('lead') && document.getElementById('lead').addEventListener('submit', function(e){ e.preventDefault(); const email = document.getElementById('email').value; if(!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ alert('Digite um e-mail válido.'); return; } alert('Obrigado! Você será avisado quando o app estiver disponível.'); this.reset(); });
});

function loadLang(lang){
  const file = './assets/lang/' + (lang.startsWith('pt') ? 'pt.json' : (lang === 'en' ? 'en.json' : 'es.json'));
  fetch(file).then(r=>r.json()).then(data=>{
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(data[key]) el.innerHTML = data[key];
    });
  }).catch(()=>{});
}
