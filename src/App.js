import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./Components/Header";
import Home from "./Pages/Home";

function App() {
  return (

    <>
        {/*<Header />*/}
        <Routes>
            <Route exact path="/" element={<Home />} />
        </Routes>
    </>

  );
}

export default App;
