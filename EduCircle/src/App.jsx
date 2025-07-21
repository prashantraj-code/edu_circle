import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import StudyGroups from "./components/StudyGroups";
import Resources from "./components/Resources";
import Schedule from "./components/Schedule";
import JitsiMeeting from "./components/JitsiMeeting";
import Login from "./components/LoginPage";
import Signup from "./components/SignupPage";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, html, * {
    font-family: 'Futura', 'Arial', sans-serif !important;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />

          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/meeting" element={<JitsiMeeting />} />
          <Route path="/groups" element={<StudyGroups />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
