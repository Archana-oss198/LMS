import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CourseDetails from "./pages/Coursedetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyCourses from "./pages/Mycourses";
import CoursePlayer from "./pages/Courseplayer";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/course/:id" element={<CourseDetails />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/my-courses" element={<MyCourses />} />

        <Route path="/player/:id" element={<CoursePlayer />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
