document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  // Simple check
  if (!name || !email || !subject || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // Example: mailto fallback (or send to your backend)
  window.location.href = `mailto:you@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)}`;
});
