import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Splash } from "./pages/splash";
import { Dashboard } from "./pages/dashboard";
import { List } from "./pages/list";

export default function ListApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="splash" element={<Splash />} />
          <Route path="list" element={<List />} />
          <Route path="*" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
ReactDOM.render(<ListApp />, document.getElementById("root"));
