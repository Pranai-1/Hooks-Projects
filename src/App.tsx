import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Effect from './components/Effect'
import Reducer from './components/Reducer';
import Callback from './components/Callback-Ref';
import './App.css'

function App() {


  return (
    <>
       <Router>
      
      <Routes>
     
       <Route  path="/" element={<Effect />} />
       <Route  path="/reducer" element={<Reducer />} />
       <Route  path="/callback" element={<Callback />} />
       </Routes>
       
       </Router>
    </>
  )
}

export default App
