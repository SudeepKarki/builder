import React from "react";
import { BrowserRouter } from "react-router-dom";

import Pages from "./components/pages/page";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Pages />
      </div>
    </BrowserRouter>
  );
}

export default App;
