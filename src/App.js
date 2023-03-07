import './App.css';
import Login from "./Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import history from "./history";
import Home from "./Home";
import MyCard from "./MyCard";

function App() {
  return (
      <BrowserRouter history={history}>
        <Routes >
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
            <Route path = "/card" element= {<MyCard />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
