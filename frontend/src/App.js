import React, { Component } from "react";
import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
  Router,
} from "react-router-dom";
import NotePage from "./pages/NotePage";
import "./App.css";
import Game from "./Game";
import Header from "./Components/Header";
import NoteListPage from "./pages/NoteListPage";
import Upload from "./pages/Upload";
import Newupload from "./pages/Newupload";
import Files from "./pages/Files";
import Test from "./pages/Test";
import { onClick, signInWithGoogle } from "./Firebase";
// import { SignIn, SomeComponent } from "./Firebase";
import SignIn from "./SignIn";
import { signOut } from "./Firebase";
import { useState } from "react";
import { auth } from "./Firebase";
import Url from "./Url";
import Home from "./Home";
import Wordle from './Track'
// import Options from "./Options";
class App extends Component {
  // const [isUserSignedIn, setIsUerSignedIn] = useState(true);

  // // const Navbar = (props) => {
  // //   // const { authenticated } = props;
  // //   const [isUserSignedIn, setIsUerSignedIn] = useState(true);
  // // }

  // auth.onAuthStateChanged((user) => {
  //   if (user) {
  //     return setIsUerSignedIn(true);
  //   } else {
  //     setIsUerSignedIn(false);
  //   }
  // });
  // if (isUserSignedIn === true)
  render() {
    return (
      <div>
        <Header />
        <div className='container dark'>
          <div >
   
            <BrowserRouter>
              <Routes>
                {/* <Route path='/' element={<NoteListPage />} /> */}
               {/* <Route path='note/:id' element={<NotePage />} />  */}
                <Route path='/test' element={<Test />} />
                {/* <Route path='/' element={<Home />} /> */}
                <Route path='/' element={<SignIn />} />
                <Route path='/game' element={<Game/>} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
