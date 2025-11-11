// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Mailto link
function sendMail(e) {
  e.preventDefault();
  const name = encodeURIComponent(e.target.name.value);
  const email = encodeURIComponent(e.target.email.value);
  const message = encodeURIComponent(e.target.message.value);
  window.location.href = `mailto:yadavjatin44285@gmail.com?subject=Portfolio Contact - ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
}

// Scroll reveal
function revealElements() {
  const reveals = document.querySelectorAll('.reveal');
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);
