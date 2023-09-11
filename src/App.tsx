import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Effect from './components/Effect'
import Reducer from './components/Reducer';
import Callback from './components/Callback-Ref';
import Currency from './components/Currency';
import './App.css'

function App() {


  return (
    <>
       <Router>
      
      <Routes>
     
       <Route  path="/" element={<Effect />} />
       <Route  path="/reducer" element={<Reducer />} />
       <Route  path="/callback" element={<Callback />} />
       <Route  path="/currency" element={<Currency />} />
       </Routes>
       
       </Router>
    </>
  )
}

export default App
