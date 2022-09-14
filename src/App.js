// import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar/NavBar';
// import

function App(){
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/" element={</>}/>
        <Route path="/" element={</>}/>
        <Route path="/" element={</>}/> */}
      </Routes>
    </div>
  )
}

export default App;
