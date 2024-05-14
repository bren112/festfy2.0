import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contatos from "./pages/Contatos";
import Sobre from "./pages/Sobre";
import PageNotFound from "./pages/PageNotFound";
import PageBase from "./pages/PageBase";
import Teste from "./pages/Sobre/tst";
import Adm from "./pages/Adm";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageBase />}>
          <Route index element={<Home />}></Route>
          <Route path="/sobre" element={<Sobre />}></Route>
          <Route path="/teste" element={<Teste />}></Route>
          <Route path="/adm" element={<Adm />}></Route>
          <Route path="/contatos" element={<Contatos />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
