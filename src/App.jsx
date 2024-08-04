import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./landing page";
import Hero from "./landing page/components/hero";
import FindTutor from "./landing page/components/findTutor";
import SignUp3 from "./Pages/userSignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="hero" element={<Hero />} />
          <Route path="find-tutor" element={<FindTutor />} />
          <Route path="/signup" element={<SignUp3 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
