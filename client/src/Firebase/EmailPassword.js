import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  // Remove the duplicate "getUser" import
} from "firebase/firestore";
import { auth, app } from "./Firebase";

// const auth = getAuth(app);
const db = getFirestore(app);
const user = auth.currentUser;
// if (user !== null) {
//   // The user object has basic properties such as display name, email, etc.
//   const displayName = user.displayName;
//   const email = user.email;
//   const photoURL = user.photoURL;
//   const emailVerified = user.emailVerified;
// console.log(displayName);
// console.log(email);
// console.log(emailVerified);
//   // The user's ID, unique to the Firebase project. Do NOT use
//   // this value to authenticate with your backend server, if
//   // you have one. Use User.getToken() instead.
//   const uid = user.uid;
// }


const updateUserProfile = async (displayName, photoURL) => {
  try {
    const user = auth.currentUser;
    if (!user) {
      console.error("No user is currently signed in");
      return;
    }

    await updateProfile(user, {
      displayName: displayName,
      photoURL: photoURL,
    });

    console.log("User profile updated successfully");
  } catch (error) {
    console.error("Error updating user profile:", error);
  }
};

export const registerUser = async (email, password, name, role) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await updateUserProfile(name, null); // Set photoURL to null for now

    const userRef = doc(db, "users", user.uid);
    const userData = {
      name: name,
      role: role,
      email: email,
      password: password,
    };

    await setDoc(userRef, userData);

    console.log("User registered successfully and data stored in Firestore");
  } catch (error) {
    console.error("Error creating user:", error.message);
  }
};




const getUserDetails = async (uid) => {
  try {
    // Get the user record using the provided UID
    const userRecord = await admin.auth().getUser(uid); // Replace with the actual method for retrieving user details

    // Extract relevant user details (customize based on your Firestore schema)
    const userDetails = {
      uid: userRecord.uid,
      email: userRecord.email,
      displayName: userRecord.displayName,
      // Add other relevant fields (e.g., role, profile photo URL, etc.)
    };

    return userDetails;
  } catch (error) {
    // Handle any errors encountered during retrieval
    throw error;
  }
};


export const signInUser = async (role, email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Get user details by UID (you'll need to implement this function)
    const userData = await getUserDetails(user.uid);

    // Check if user's role matches the specified role
    if (userData.role === role) {
      console.log("User signed in:", user.uid);
      // Perform further actions after successful sign-in
    } else {
      // User's role doesn't match the specified role
      console.error("User role doesn't match.");
      // Sign out the user since they shouldn't be allowed to sign in
      await signOut(auth);
      console.log("User signed out due to role mismatch.");
    }
  } catch (error) {
    const errorMessage = error.message;
    console.error("Error signing in:", errorMessage);
  }
};
// Auth state listener
export const authState = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(user);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
};
