const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
};

if(close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
};

  function toggleWhatsApp() {
    const popup = document.getElementById("whatsapp-popup");
    popup.style.display = popup.style.display === "block" ? "none" : "block";
  }

