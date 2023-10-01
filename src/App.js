import { BrowserRouter, Route, Routes } from "react-router-dom";
import {useEffect , useState} from "react";
import "./App.css";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Events from "./Pages/Events";
import Nav from "./Components/Common/Nav";
import Footer from "./Components/Common/Footer";
import { Spinner } from "./Components/spinner/spinner";

function App() {
  const [loading , setLoading] = useState(true) ;
  useEffect(() => {setTimeout(() => {setLoading(false);}, 2000);}, []);
  return (
    <div>
      {
        loading? (<Spinner/>) : (
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/team" element={<Team />}></Route>
              <Route path="/events" element={<Events />}></Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        )
      }
    </div>
  );
}

export default App;
