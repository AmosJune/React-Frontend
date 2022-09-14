// import logo from './logo.svg';
import './App.css';
import Card from './component/Card/Card';
import NavBar from './NavBar/NavBar';
// import

function App(){
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/navbar" element={<NavBar/>}/>
        <Route path="/viewquote" element={<ViewQuote/>}/>
        <Route path="/card" element={<Card/>}/>
      </Routes>
    </div>
  )
}

export default App;
