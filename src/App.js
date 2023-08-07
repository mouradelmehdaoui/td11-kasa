//React Router (v6)
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

//Pages
import Home from "./pages/Home/Home";
import Error404 from "./pages/Error404/Error404";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/*" element={<Error404 />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
