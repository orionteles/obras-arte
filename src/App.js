import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Menu from "./components/Menu";
import Obras from "./pages/obras/Obras";
import ObrasDetalhes from './pages/obras/ObrasDetalhes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
            <Route path="/" element={<Obras />} />
            <Route path="/obras" element={<Obras />} />
            <Route path="/obras/:id" element={<ObrasDetalhes />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
