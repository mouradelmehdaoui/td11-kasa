//React Router (v6)
import { Route, Routes } from "react-router-dom";

//Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Error404 from "./pages/Error404/Error404";
import LogementDetail from "./pages/Logement/LogementDetail";

// Bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';



function App() {
  return (

    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/*" element={<Error404 />} />
      <Route path="/about" element={<About />} />
      <Route exact path="/logements/:id" component={<LogementDetail />} />
    </Routes>
 
  );
}

export default App;
