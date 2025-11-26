import { 
  signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

document.getElementById("loginBtn").onclick = async () => {
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("password").value.trim();

  try {
    await signInWithEmailAndPassword(fb.auth, email, pass);
    alert("Login successful!");
    window.location.href = "index.html";
  } catch (err) {
    alert("Login failed: " + err.message);
  }
};
