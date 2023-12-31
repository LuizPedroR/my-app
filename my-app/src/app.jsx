import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

/* Paginas */
import Home from "./pages/home/index.jsx";
import Login from "./pages/login.jsx";

import "./styles.css";

/* Comecei o projeto pensando que precisaria utilizar do route para o funcionamente mas conforme foi se desenvolvendo
percebi que não seria nescessario, deixei a aba login mais para uma demonstração de funcionamento */

/* Tentei focar mais nas funcionalidades do site juntamente com que foi pedido visualmente, aprendi muito realizando este projeto */
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
    </BrowserRouter>
  );
}

export default App;
