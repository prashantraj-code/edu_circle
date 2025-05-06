import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import JitsiMeeting from './components/JitsiMeeting'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meeting" element={<JitsiMeeting />} />
      </Routes>
    </Router>
  )
}

export default App
