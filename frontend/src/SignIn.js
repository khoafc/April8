// Import the functions you need from the SDKs you need
import React, { Component, useState } from "react";
import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import "./App.css";
import axios from "axios";

import { useNavigate, Navigate } from "react-router-dom";
// import { useNavigation } from "@react-navigation/native";
import { auth } from "./Firebase";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


function SignIn() {
  const history = useNavigate();
  // const [username, setUsername] = useState(0);
  
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    // const navigate = useNavigate();
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        localStorage.setItem("email", email);
        // global.usernameSpecial = email
        // const profilePic = result.user.photoURL;
        // localStorage.setItem("name", name);
        // localStorage.setItem("email", email);
        // localStorage.setItem("profilePic", profilePic);
        // setUsername(name)
        console.log(result);
              history("/test");

        
        let Admin= async () => {
          let formField = new FormData();
          // formField.append("content", content);
          console.log("VY VY")
          formField.append("email", email);
          formField.append("action", "add-admin");
          await axios({
            method: "POST",
            url: "/api/user/create/",
            data: formField,
          }).then((response) => {
            // console.log(response)
            // let myObj = response.data.username
            
            // setUsername(myObj)
          })}

        Admin();
        // let CreateNote = async () => {
        //   let response = await fetch(`/api/user/create/`)
        //   console.log("Khoa DANG PHAM DANG")
        //   console.log(response)
        //   let data = await response.json()
        //   console.log(data)
        // }

        // CreateNote();

        // let createNote = async () => {
        //   fetch(`api/user/create/`, {
        //     method: "GET",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     username: JSON.stringify(Object),
        //   });
        //   // console.log(username)
        //   console.log("KHOADANGPHAM")
        // };
     
        


      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  
  return (
    <div>
      <div className='container dark'>
        <div className='ti'>
          <button onClick={signInWithGoogle}>Sign In With Google</button>
          {/* <h1>{localStorage.getItem("name")}</h1>
          <h1>{localStorage.getItem("email")}</h1>
          <h1>{localStorage.getItem("profilePic")}</h1> */}
        </div>
        {/* <div className='teo'>
          <button onClick={signOut}>Sign Out</button>
          <h1>{localStorage.getItem("name")}</h1>
          <h1>{localStorage.getItem("email")}</h1>
          <h1>{localStorage.getItem("profilePic")}</h1>
        </div> */}
      </div>
    </div>
  );
}

export default SignIn;
