import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ApiView from "./pages/ApiView";
import Bitacora from "./pages/Bitacora";
import ComponentTree from "./pages/ComponentTree";
import Home from "./pages/Home";
import LocalData from "./pages/LocalData";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/perfiles" element={<Profile />} />
        <Route path="/perfiles/:slug" element={<Profile />} />
        <Route path="/arbol-componentes" element={<ComponentTree />} />
        <Route path="/bitacora" element={<Bitacora />} />
        <Route path="/datos-locales" element={<LocalData />} />
        <Route path="/api" element={<ApiView />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
