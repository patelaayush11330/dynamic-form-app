document.addEventListener('DOMContentLoaded', () => {
  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const previewUsername = document.getElementById('previewUsername');
  const previewEmail = document.getElementById('previewEmail');
  const passwordStrength = document.getElementById('passwordStrength');
  const usernameHint = document.getElementById('usernameHint');

  usernameInput.addEventListener('input', () => {
    const username = usernameInput.value;
    previewUsername.textContent = username || '-';
    usernameHint.classList.toggle('d-none', username.length >= 3);
  });

  emailInput.addEventListener('input', () => {
    previewEmail.textContent = emailInput.value || '-';
  });

  passwordInput.addEventListener('input', () => {
    const pwd = passwordInput.value;
    if (pwd.length < 6) {
      passwordStrength.textContent = 'Weak';
      passwordStrength.style.color = 'red';
    } else if (pwd.length >= 6 && /\d/.test(pwd)) {
      passwordStrength.textContent = 'Moderate';
      passwordStrength.style.color = 'orange';
    } else if (pwd.length >= 8 && /\d/.test(pwd) && /[A-Z]/.test(pwd)) {
      passwordStrength.textContent = 'Strong';
      passwordStrength.style.color = 'green';
    } else {
      passwordStrength.textContent = '';
    }
  });
});
