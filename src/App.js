import Title from "./stranich/title"
import Oplata from "./stranich/oplata"
import "./style/title.css"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Title/>}/>
      </Routes>
      <Routes>
        <Route path="/oplat" element={<Oplata/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
