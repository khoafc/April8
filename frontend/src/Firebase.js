// Import the functions you need from the SDKs you need
import React, { Component } from "react";
import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import NotePage from "./pages/NotePage";
import "./App.css";
import Header from "./Components/Header";
import NoteListPage from "./pages/NoteListPage";
import Upload from "./pages/Upload";
import Newupload from "./pages/Newupload";
import Files from "./pages/Files";
import Test from "./pages/Test";
import { useNavigate, Navigate } from "react-router-dom";
// import { useNavigation } from "@react-navigation/native";

import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Redirect } from "react-router-dom";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9kKKBnfcJipCESkXUS3xqKz8B0_vvaG0",
  authDomain: "auth-fd0e3.firebaseapp.com",
  projectId: "auth-fd0e3",
  storageBucket: "auth-fd0e3.appspot.com",
  messagingSenderId: "93385590305",
  appId: "1:93385590305:web:047038228c3edf4e4c8560",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// const history = useNavigate();

// export const SignIn = () => {
//   // const navigate = useNavigate();

//   const signInWithGoogle = () => {
//     // const provider = new GoogleAuthProvider();
//     // const navigate = useNavigate();
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         const name = result.user.displayName;
//         const email = result.user.email;
//         const profilePic = result.user.photoURL;
//         localStorage.setItem("name", name);
//         localStorage.setItem("email", email);
//         localStorage.setItem("profilePic", profilePic);
//         console.log(result);
//         console.log("KhoaPham");
//         // <Navigate to='/test' replace state={{ from: location }} />;
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   signInWithGoogle();
// };

// export const onClick = () => {
//   SignIn()
//   // a = new SignIn
//   console.log(SignIn.teo);
//   if (SignIn.teo) {
//     console.log("Tao La ti");
//   } else {
//     // a.history("/test");
//   }
// };
// export const signOut = () => {
//   auth.signOut().then((result) => {
//     console.log(result);
//     console.log("khoa dang pham");
//     localStorage.clear();
//   });
// };

// export const SomeComponent = () => {
//   const navigate = useNavigate();

//   const someEventHandler = () => {
//     navigate("/test");
//   };
// };
