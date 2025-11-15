const products = [
  {id:1,name:'Caretaker X1',price:249.00,img:'images/robot1.svg'},
  {id:2,name:'Scout Mini',price:129.00,img:'images/robot2.svg'},
  {id:3,name:'Companion A7',price:399.00,img:'images/robot3.svg'},
  {id:4,name:'Guardian G5',price:329.00,img:'images/robot4.svg'},
  {id:5,name:'Helper H2',price:179.00,img:'images/robot5.svg'},
  {id:6,name:'Courier C9',price:219.00,img:'images/robot6.svg'},
  {id:7,name:'Nurse N1',price:459.00,img:'images/robot7.svg'},
  {id:8,name:'Explorer E4',price:199.00,img:'images/robot8.svg'}
];

function $(id){return document.getElementById(id)}

function renderProducts(){
  const wrap = $('products');
  wrap.innerHTML = '';
  products.forEach(p=>{
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}" />
      <h4>${p.name}</h4>
      <div class="desc">Personality: ${samplePersonality(p.id)}</div>
      <div class="row">
        <div class="price">$${p.price.toFixed(2)}</div>
      </div>`;
    wrap.appendChild(card);
  });
}

function samplePersonality(id){
  const list = ['Calm assistant','Quick scout','Friendly companion','Steady guardian','Helpful handyman','Fast courier','Gentle nurse','Curious explorer'];
  return list[(id-1) % list.length];
}

function showToast(msg){
  const t = document.createElement('div');
  t.textContent = msg; t.style.position='fixed';t.style.bottom='20px';t.style.left='20px';t.style.background='linear-gradient(90deg,var(--accent1),var(--accent2))';t.style.color='#041224';t.style.padding='8px 12px';t.style.borderRadius='8px';t.style.boxShadow='0 8px 20px rgba(0,0,0,0.6)';t.style.zIndex=1000;document.body.appendChild(t);
  setTimeout(()=>{t.style.transition='opacity 300ms';t.style.opacity='0';setTimeout(()=>t.remove(),300)},1400);
}

window.addEventListener('load',()=>{
  renderProducts();
  
  const form = $('contactForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = $('name').value.trim();
      const email = $('email').value.trim();
      const msg = $('message').value.trim();
      $('contactResult').textContent = `Thanks, ${name}! Your message has been received (simulated).`;
      form.reset();
    });
  }

  function scrollToContact(){
    const target = $('contact');
    if(target){
      target.scrollIntoView({behavior:'smooth',block:'start'});
      setTimeout(()=>{const n = $('name'); if(n) n.focus();},450);
    }
  }

  document.querySelectorAll('.contact-link').forEach(el=>{
    el.addEventListener('click',(ev)=>{
      const href = el.getAttribute('href')||'';
      if(href.includes('#contact')){
        if(window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')){
          ev.preventDefault();
          scrollToContact();
        }
      }
    });
  });

  const fab = $('contactFab');
  if(fab){
    fab.addEventListener('click',()=>{scrollToContact();});
  }

  const copyBtn = $('copyEmailBtn');
  const emailAddr = 'hello@robobazaar.example';
  if(copyBtn){
    copyBtn.addEventListener('click',async ()=>{
      try{
        await navigator.clipboard.writeText(emailAddr);
        showToast('Email copied to clipboard');
      }catch(e){
        const ta = document.createElement('textarea');ta.value = emailAddr;document.body.appendChild(ta);ta.select();
        try{document.execCommand('copy');showToast('Email copied to clipboard');}catch(err){alert('Email: '+emailAddr)}
        ta.remove();
      }
    });
  }

  const mailto = $('mailtoLink'); if(mailto) mailto.href = `mailto:${emailAddr}?subject=RoboBazaar%20Inquiry`;

  const year2Elem = document.getElementById('year2');
  if(year2Elem) year2Elem.textContent = new Date().getFullYear();
});