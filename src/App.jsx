
import './App.css'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Navbar from './pages/components/Navbar'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
