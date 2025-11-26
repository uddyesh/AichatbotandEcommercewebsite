// Firebase v10 modular SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
  getAuth, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { 
  getDatabase, 
  ref, 
  push, 
  set 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyA0QWq093qGAiad2sT9ddKIGpRnIFSOCG8",
  authDomain: "myecommerceapp-5119b.firebaseapp.com",
  databaseURL: "https://myecommerceapp-5119b-default-rtdb.firebaseio.com",
  projectId: "myecommerceapp-5119b",
  storageBucket: "myecommerceapp-5119b.appspot.com",
  messagingSenderId: "278209876777",
  appId: "1:278209876777:web:2d3d824cd7587886d85d38"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const rtdb = getDatabase(app);

// GLOBAL FB OBJECT
window.fb = {
  auth,

  onAuth(cb) { return onAuthStateChanged(auth, cb); },

  async saveChatMessage(userId, message) {
    const msgRef = push(ref(rtdb, `chats/${userId}/messages`));
    return set(msgRef, {
      ...message,
      ts: Date.now()
    });
  }
};

console.log("🔥 Firebase Web Initialized");
