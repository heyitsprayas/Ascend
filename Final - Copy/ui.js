// ✅ Splash Screen (first visit per tab)
if (!sessionStorage.getItem('visited')) {
    document.getElementById('splash').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('splash').classList.add('fade-out');
        setTimeout(() => document.getElementById('splash').style.display = 'none', 600);
    }, 3000);
    sessionStorage.setItem('visited', 'true');
} else {
    document.getElementById('splash').style.display = 'none';
}

// ✅ Load Profile Info
window.addEventListener('DOMContentLoaded', () => {
    let name = sessionStorage.getItem('name') || 'John Doe';
    let userClass = sessionStorage.getItem('class') || '';
    let email = sessionStorage.getItem('email') || '';
    document.getElementById('profileName').textContent = name;
    document.getElementById('profileClass').textContent = userClass;
});

// ✅ Logout
document.getElementById('logoutBtn').addEventListener('click', () => {
    sessionStorage.clear();
    window.location.href = 'login.html';
});
