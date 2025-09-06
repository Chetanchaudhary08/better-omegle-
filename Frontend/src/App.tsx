import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Room from './components/Room';
import Landing from './components/Landing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/room" element={<Room />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;