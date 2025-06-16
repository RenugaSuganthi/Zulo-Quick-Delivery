// Sign Up Function

function login() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    alert("Invalid email or password.");
    return;
  }

  localStorage.setItem("loggedInUser", JSON.stringify(user));
  alert("Login successful!");

  // Redirect based on role
  if (user.role === "store") {
    window.location.href = "dashboard.html";
  } else {
    window.location.href = "index.html";
  }
}

function signup() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;
  const role = document.getElementById('role').value;

  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const userExists = users.some(user => user.email === email);
  if (userExists) return alert('User already exists!');

  users.push({ name, email, pass, role });
  localStorage.setItem('users', JSON.stringify(users));
  alert('Signup successful!');
  window.location.href = 'login.html';
}

// Login Function
function login() {
  const email = document.getElementById('loginEmail').value;
  const pass = document.getElementById('loginPassword').value;
  const users = JSON.parse(localStorage.getItem('users') || '[]');

  const user = users.find(u => u.email === email && u.pass === pass);
  if (!user) return alert('Invalid credentials!');

  localStorage.setItem('loggedInUser', JSON.stringify(user));
  alert(`Welcome, ${user.name}`);
  window.location.href = user.role === 'store' ? 'dashboard.html' : 'index.html';
}
