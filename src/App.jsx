import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./landing page";
import Hero from "./landing page/components/hero";
import FindTutor from "./landing page/components/findTutor";
import SignIn11 from "./Pages/login";
import SignUp16 from "./Pages/userSignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="hero" element={<Hero />} />
          <Route path="find-tutor" element={<FindTutor />} />
          <Route path="/signup" element={<SignUp16 />} />
          <Route path="/login" element={<SignIn11 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
