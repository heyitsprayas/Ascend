
// Show class dropdown only for students
document.getElementById('role').addEventListener('change', function() {
  const classGroup = document.getElementById('class-group');
  classGroup.style.display = this.value === 'student' ? 'block' : 'none';
});

function togglePassword() {
  const passInput = document.getElementById('password');
  passInput.type = passInput.type === 'password' ? 'text' : 'password';
}

function handleLogin(event) {
  event.preventDefault();

  const role = document.getElementById('role').value;
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const classValue = document.getElementById('class').value;
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

    // Save user data
    sessionStorage.setItem('userName', email);
    if (role === 'student') {
      sessionStorage.setItem('userClass', classValue || 'Grade 11');
    } else {
      sessionStorage.setItem('userClass', role);
    }
    sessionStorage.setItem('userRole', role);

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
  document.getElementById('loginForm').addEventListener('submit', function(e){
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let role = document.getElementById('role').value;

    fetch('login.php', {
        method: 'POST',
        body: new URLSearchParams({username, password, role}),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .then(res => res.json())
    .then(data => {
        if(data.success){
            sessionStorage.setItem('name', data.name);
            sessionStorage.setItem('class', data.class || '');
            sessionStorage.setItem('role', data.role);
            sessionStorage.setItem('email', data.email);
            sessionStorage.setItem('user_id', data.id);
            window.location.href = 'dashboard.html';
        } else {
            document.getElementById('loginMsg').textContent = "Invalid username or password";
        }
    })
    .catch(err => console.error(err));
});

};
