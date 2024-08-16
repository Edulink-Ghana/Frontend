import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./landing page";
import Hero from "./landing page/components/hero";
import SignIn11 from "./Pages/login";
import SignUp16 from "./Pages/userSignUp";
import SignUp17 from "./Pages/tutorSignUp";
import FindATutor from "./Pages/findATutor";
import FormElementInput from "./landing page/components/booking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="hero" element={<Hero />} />
          <Route path="findATutor" element={<FindATutor/>} />
          <Route path="/Signup" element={<SignUp16 />} />
          <Route path="/tutorSignUp" element={<SignUp17 />} />
          <Route path="/login" element={<SignIn11 />} />
          <Route path="/booking" element={<FormElementInput />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
