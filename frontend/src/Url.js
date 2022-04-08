import React, { Component } from "react";
import {
  BrowserRouter as BrowserRouter,
  Route,
  Link,
  Routes,
  Router,
} from "react-router-dom";
import Home from "./Home";
import NoteListPage from "./pages/NoteListPage";
import NotePage from "./pages/NotePage";
import Test from "./pages/Test";

// import News from "../components/News";

// import { Switch } from "react-router-dom";

class Url extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<NoteListPage />} />
            <Route path='note/:id' element={<NotePage />} /> */}
          <Route path='/test' element={<Test />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Url;


  /* <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/tin'>
            <News />
          </Route>
        </div>
      </Router> */

