import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './component/HomePage'
import OwnerPage from './component/OwnerPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/HomePage" />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/OwnerPage" element={<OwnerPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
