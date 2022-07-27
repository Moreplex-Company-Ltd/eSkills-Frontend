import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from "./pages/About";
import AllCourses from "./pages/AllCourses";
import AllCourses2 from "./pages/AllCourses2";
import CategoryPage from "./pages/CategoryPage";
import CoursePage from "./pages/CoursePage";
import DetailedCategoryPage from "./pages/DetailedCategoryPage";
import HelpSupport from "./pages/HelpSupport";


// import all pages
import Home from "./pages/Home";
import Interests from "./pages/Interests";
import Landing from "./pages/Landing";
import Page404 from "./pages/Page404";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
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
          <Route exact path="/categories" element={<CategoryPage />} />
          <Route exact path="/categories/:catID" element={<DetailedCategoryPage />} />
          <Route exact path="/courses" element={<AllCourses />} />
          <Route exact path="/allcourses" element={<AllCourses2 />} />
          <Route exact path="/profile" element={<Profile /> } />

          <Route exact path="/course" element={<CoursePage />} />


          <Route exact path="/terms" element={<Terms />} />
          <Route exact path="/privacy" element={<Privacy />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/help" element={<HelpSupport />} />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
   </React.Fragment>
  );
}

export default App;
