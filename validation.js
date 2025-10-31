
// validation.js - client and admin side form validation
function validateContactForm(){
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  let ok = true;
  if(name===''){ setError('name','Name is required'); ok=false; } else clearError('name');
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ setError('email','Enter valid email'); ok=false; } else clearError('email');
  if(message.length<10){ setError('message','Message must be at least 10 characters'); ok=false; } else clearError('message');
  if(ok){ showAlert('Contact form submitted (demo)'); return false; }
  return false;
}

function validateRegisterForm(){
  const name = document.getElementById('rname').value.trim();
  const email = document.getElementById('remail').value.trim();
  const pass = document.getElementById('rpassword').value.trim();
  let ok = true;
  if(name.length<3){ setError('rname','Name min 3 chars'); ok=false; } else clearError('rname');
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ setError('remail','Enter valid email'); ok=false; } else clearError('remail');
  if(pass.length<6){ setError('rpassword','Password min 6 chars'); ok=false; } else clearError('rpassword');
  if(ok){ showAlert('Registration successful (demo)'); return false; }
  return false;
}

function validateAddPropertyForm(){
  const title = document.getElementById('ptitle').value.trim();
  const price = document.getElementById('pprice').value.trim();
  const desc = document.getElementById('pdesc').value.trim();
  let ok = true;
  if(title.length<5){ setError('ptitle','Title too short'); ok=false; } else clearError('ptitle');
  if(!/^[0-9]+$/.test(price)){ setError('pprice','Enter numeric price'); ok=false; } else clearError('pprice');
  if(desc.length<20){ setError('pdesc','Description min 20 chars'); ok=false; } else clearError('pdesc');
  if(ok){ showAlert('Property added (demo)'); return false; }
  return false;
}

function validateLoginForm(formId, isAdmin){
  const user = document.querySelector(`#${formId} input[name="username"]`).value.trim();
  const pass = document.querySelector(`#${formId} input[name="password"]`).value.trim();
  if(isAdmin){
    if(user==='abc' && pass==='abc@123'){
      alert('Admin login success (demo)');
      window.location = 'admin/index.html';
      return false;
    } else { alert('Invalid admin credentials'); return false; }
  } else {
    if(user.length<3 || pass.length<3){ alert('Invalid credentials (demo)'); return false; }
    alert('Login success (demo)');
    window.location = 'index.html';
    return false;
  }
}

function setError(id,msg){ const el=document.getElementById(id); if(!el) return; let s=el.nextElementSibling; if(s && s.classList.contains('form-error')) s.textContent=msg; }
function clearError(id){ const el=document.getElementById(id); if(!el) return; let s=el.nextElementSibling; if(s && s.classList.contains('form-error')) s.textContent=''; }

// expose showAlert from main.js
function showAlert(msg){ const c=document.getElementById('alert-container'); if(!c) return alert(msg); c.innerHTML = `<div class="alert alert-info">${msg}</div>`; setTimeout(()=>c.innerHTML='',3000); }
