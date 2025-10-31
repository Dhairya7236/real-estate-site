
// main.js - general scripts
function showAlert(message){
  const container = document.getElementById('alert-container');
  if(!container) return alert(message);
  container.innerHTML = `<div class="alert alert-success">${message}</div>`;
  setTimeout(()=>{ container.innerHTML = '' }, 3500);
}
