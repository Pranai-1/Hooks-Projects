import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Effect from './components/Effect'
import Reducer from './components/Reducer';
import './App.css'

function App() {


  return (
    <>
       <Router>
      
      <Routes>
     
       <Route  path="/" element={<Effect />} />
       <Route  path="/reducer" element={<Reducer />} />
       </Routes>
       
       </Router>
    </>
  )
}

export default App
