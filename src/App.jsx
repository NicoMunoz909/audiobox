import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import "./App.css";
import NosotrosPage from "./Pages/NosotrosPage";
import ServiciosPage from "./Pages/ServiciosPage";
import ProyectosPage from "./Pages/ProyectosPage";
import ContactoPage from "./Pages/ContactoPage";
import ServicePage from "./Pages/ServicePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="nosotros" element={<NosotrosPage />} />
        <Route path="servicios" element={<ServiciosPage />} />
        <Route
          path="servicios/eventos"
          element={<ServicePage title="Producción de eventos" />}
        />
        <Route
          path="servicios/venta"
          element={<ServicePage title="Venta de Equipos" />}
        />
        <Route
          path="servicios/instalacion"
          element={<ServicePage title="Instalación" />}
        />
        <Route path="proyectos" element={<ProyectosPage />} />
        <Route path="contacto" element={<ContactoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
