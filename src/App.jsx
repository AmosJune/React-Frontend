// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import Card from './component/Card/Card';
import ViewQuotes from './component/ViewQuotes/ViewQuotes';
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';

function App() {
  const[quotes, setQuotes] = useState([])

  useEffect(() => {
    fetch('https://iquotes-app.herokuapp.com/quotes')
      .then((r) => r.json())
      .then(data => setQuotes(data))
  }, [])
  console.log(quotes);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/viewquote" element={<ViewQuotes/>}/>
        <Route path="/card" element={<Card/>}/>
      </Routes>
    </div>
  )
}

export default App;
