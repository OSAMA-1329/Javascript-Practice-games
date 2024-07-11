import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Appbar from './components/Appbar';
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Appbar/>
      <Home/>
    </div>
  )
}

export default App
