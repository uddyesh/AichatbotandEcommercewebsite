import { 
  createUserWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

document.getElementById("signupBtn").onclick = async () => {
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("password").value.trim();

  try {
    await createUserWithEmailAndPassword(fb.auth, email, pass);
    alert("Signup successful!");
    window.location.href = "index.html";
  } catch (err) {
    alert("Signup failed: " + err.message);
  }
};
