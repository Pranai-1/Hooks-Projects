import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UseEffect from './components/UseEffect'
import './App.css'

function App() {


  return (
    <>
       <Router>
      
      <Routes>
     
       <Route  path="/" element={<UseEffect />} />
      
       </Routes>
       
       </Router>
    </>
  )
}

export default App
