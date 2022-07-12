import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AllCourses from "./pages/AllCourses";


// import all pages
import Home from "./pages/Home";
import Interests from "./pages/Interests";
import Landing from "./pages/Landing";
import Page404 from "./pages/Page404";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Terms from "./pages/Terms";
import Try from "./pages/Try";

function App() {
  return (
   <React.Fragment>
      <Router>
        <Routes>
          <Route exact path="/try" element={<Try />} />

          <Route index exact  element={<Landing />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/interests" element={<Interests />} />
          
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/courses" element={<AllCourses />} />


          <Route exact path="/terms" element={<Terms />} />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
   </React.Fragment>
  );
}

export default App;
