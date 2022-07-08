import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


// import all pages
import Home from "./pages/Home";
import Interests from "./pages/Interests";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
   <React.Fragment>
      <Router>
        <Routes>
          <Route index exact  element={<Home />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/interests" element={<Interests />} />
        </Routes>
      </Router>
   </React.Fragment>
  );
}

export default App;
