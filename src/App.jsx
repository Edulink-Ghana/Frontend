import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./landing page";
import Hero from "./landing page/components/hero";
import SignIn11 from "./Pages/login";
import SignUp16 from "./Pages/userSignUp";
import SignUp17 from "./Pages/tutorSignUp";
import FindATutor from "./Pages/findATutor";
import TeamMember10 from "./landing page/components/filterSession";
import MemberDetail from "./components/memberDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="hero" element={<Hero />} />
          <Route path="findATutor" element={<FindATutor />} />
          <Route path="/signup" element={<SignUp16 />} />
          <Route path="/tutorsignup" element={<SignUp17 />} />
          <Route path="/login" element={<SignIn11 />} />
          <Route path="/" element={<TeamMember10 />} />
          <Route path="/members/:memberId" element={<MemberDetail  members={TeamMember10}/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
