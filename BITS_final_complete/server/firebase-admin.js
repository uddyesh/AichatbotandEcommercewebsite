import admin from "firebase-admin";
import dotenv from "dotenv";

dotenv.config();

// ------------------------------------------
// 1. Force-correct Realtime Database URL
// ------------------------------------------
const FIXED_DB_URL =
  process.env.FIREBASE_DB_URL ||
  "https://myecommerceapp-5119b-default-rtdb.firebaseio.com";

// ------------------------------------------
// 2. Load service account JSON from .env
// ------------------------------------------
let serviceAccount = null;

if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY_JSON) {
  try {
    serviceAccount = JSON.parse(
      process.env.FIREBASE_SERVICE_ACCOUNT_KEY_JSON
    );
  } catch (e) {
    console.error("❌ SERVICE ACCOUNT JSON PARSE FAILED");
    console.error(e);
  }
}

// ------------------------------------------
// 3. Initialize Firebase Admin
// ------------------------------------------
if (serviceAccount) {
  console.log("🔐 Using serviceAccount from .env");
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: FIXED_DB_URL,
  });
} else {
  console.log("⚠ Using default credential initialization");
  admin.initializeApp({
    databaseURL: FIXED_DB_URL,
  });
}

// ------------------------------------------
// 4. Export RTDB instance
// ------------------------------------------
export const db = admin.database();
export default admin;
