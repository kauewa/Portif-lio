import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Projetos from './pages/projetos'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


