import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AiTools from './pages/AiTools'
import AiPrompts from './pages/AiPrompts'
import LiveFootball from './pages/LiveFootball'
import MyanmarTV from './pages/MyanmarTV'
import About from './pages/About'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/freeAi.html" element={<AiTools />} />
      <Route path="/aipromp.html" element={<AiPrompts />} />
      <Route path="/live/index.html" element={<LiveFootball />} />
      <Route path="/mmtv/index.html" element={<MyanmarTV />} />
      <Route path="/about.html" element={<About />} />
    </Routes>
  )
}

export default App
