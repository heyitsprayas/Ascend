function togglePassword() {
  const passInput = document.getElementById('password');
  passInput.type = passInput.type === 'password' ? 'text' : 'password';
}

function handleLogin(event) {
  event.preventDefault();

  const role = document.getElementById('role').value;
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const rememberMe = document.getElementById('rememberMe').checked;
  const errorMsg = document.getElementById('error-message');
  const validUsers = {
    student: { username: "student1", password: "pass123" },
    teacher: { username: "teacher1", password: "pass123" },
    parent:  { username: "parent1",  password: "pass123" },
    admin:   { username: "admin1",   password: "pass123" }
  };

  if (
    validUsers[role] &&
    validUsers[role].username === email &&
    validUsers[role].password === password
  ) {
    errorMsg.textContent = "";
    if (rememberMe) {
      localStorage.setItem("rememberedUser", JSON.stringify({ role, email }));
    }
    window.location.href = `${role}.html`;
  } else {
    errorMsg.textContent = "Invalid username or password.";
  }
}
window.onload = () => {
  const remembered = JSON.parse(localStorage.getItem("rememberedUser"));
  if (remembered) {
    document.getElementById("role").value = remembered.role;
    document.getElementById("email").value = remembered.email;
    document.getElementById("rememberMe").checked = true;
  }
  function handleLogin(event) {
  event.preventDefault();

  

  fetch('login.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `role=${encodeURIComponent(role)}&username=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
  })
  .then(res => res.json())
  .then(data => {
   
  })
  .catch(() => {
    errorMsg.textContent = 'Server error. Please try again.';
  });
}

};
