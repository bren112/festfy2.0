import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contatos from "./pages/Contatos";
<<<<<<< HEAD
=======
import Projetos from "./pages/Projetos";
>>>>>>> 5b03a8d52eabd93616d767a4c817d542ebfea81f
import Sobre from "./pages/Sobre";
import PageNotFound from "./pages/PageNotFound";
import PageBase from "./pages/PageBase";
import Teste from "./pages/Sobre/tst";
<<<<<<< HEAD
import Adm from "./pages/Adm";
=======
>>>>>>> 5b03a8d52eabd93616d767a4c817d542ebfea81f

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageBase />}>
          <Route index element={<Home />}></Route>
          <Route path="/sobre" element={<Sobre />}></Route>
          <Route path="/teste" element={<Teste />}></Route>
<<<<<<< HEAD
          <Route path="/adm" element={<Adm />}></Route>
=======
          <Route path="/projetos" element={<Projetos />}></Route>
>>>>>>> 5b03a8d52eabd93616d767a4c817d542ebfea81f
          <Route path="/contatos" element={<Contatos />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
