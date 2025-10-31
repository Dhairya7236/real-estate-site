document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("adminLoginForm");
  const errorMsg = document.getElementById("errorMsg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Hardcoded credentials
    const adminUser = "abc";
    const adminPass = "abc@123";

    if (username === adminUser && password === adminPass) {
      alert("Login Successful! Redirecting to Admin Dashboard...");
      window.location.href = "admin_dashboard.html";
    } else {
      errorMsg.classList.remove("hidden");
      errorMsg.textContent = "Invalid username or password!";
    }
  });
});
