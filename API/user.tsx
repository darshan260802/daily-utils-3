import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithEmailLink, updateProfile } from "firebase/auth";
import { doc, DocumentData, getDoc, setDoc } from "firebase/firestore";
import database, { Auth } from "./database";
const encryptPassword = require("client-pass-protect");

interface User {
  userName?: string;
  userEmail: string;
  userPassword: string;
}

interface ServerUser {
    Name: string;
    Email: string;
    Password: string;
}

export const userSignup = async ({
  userName,
  userEmail,
  userPassword,
}: User) => {
  const result = createUserWithEmailAndPassword(Auth, userEmail, userPassword).then(res => {
    Auth.currentUser && updateProfile(Auth.currentUser, {displayName: userName})
    localStorage.setItem("userId", res.user.uid)
    return true;
  }).catch(err => {
    console.error(err);
    return false;
  })

  return result;
};

export const userLogin = async ({
  userEmail,
  userPassword,
}: User) => {
  const result = signInWithEmailAndPassword(Auth, userEmail, userPassword).then(res => {
    localStorage.setItem("userId", res.user.uid)
    return true;
  }).catch(err => {
    console.error(err);
    return false;
  })
  return result;
};
