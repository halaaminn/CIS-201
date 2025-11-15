const CONTACT_EMAIL = 'hello@robobazaar.example';

function $(id){return document.getElementById(id)}

window.addEventListener('load', ()=>{
  const form = $('contactForm');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = $('name').value.trim();
    const email = $('email').value.trim();
    const subject = $('subject').value;
    const msg = $('message').value.trim();
    
    if(!name || !email || !subject || !msg){
      $('contactResult').textContent = 'Please fill in all fields.';
      return;
    }
    
    $('contactResult').textContent = 'Sending message...';
    setTimeout(()=>{
      $('contactResult').textContent = `Thanks, ${name}! Your message has been received (simulated).`;
      form.reset();
    }, 1200);
  });

  const copyBtn = $('copyEmailBtn');
  if(copyBtn){
    copyBtn.addEventListener('click', async ()=>{
      try{
        await navigator.clipboard.writeText(CONTACT_EMAIL);
        showToast('Email copied to clipboard');
      }catch(e){
        const ta = document.createElement('textarea');
        ta.value = CONTACT_EMAIL;
        document.body.appendChild(ta);
        ta.select();
        try{
          document.execCommand('copy');
          showToast('Email copied to clipboard');
        }catch(err){
          alert('Email: ' + CONTACT_EMAIL);
        }
        ta.remove();
      }
    });
  }

  const mailto = $('mailtoLink');
  if(mailto){
    mailto.href = `mailto:${CONTACT_EMAIL}?subject=RoboBazaar%20Inquiry`;
  }

  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();
});

function showToast(msg, duration=2000){
  const toast = document.createElement('div');
  toast.textContent = msg;
  toast.style.cssText = 'position:fixed;bottom:20px;left:20px;background:linear-gradient(90deg,var(--accent1),var(--accent2));color:#041224;padding:8px 12px;border-radius:8px;box-shadow:0 8px 20px rgba(0,0,0,0.6);z-index:1000;';
  document.body.appendChild(toast);
  setTimeout(()=>{
    toast.style.transition = 'opacity 300ms';
    toast.style.opacity = '0';
    setTimeout(()=>toast.remove(), 300);
  }, duration);
}