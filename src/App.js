import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home/Home";

function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout setActiveComponent={setActiveComponent} />}
        >
          <Route index element={<Home activeComponent={activeComponent} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
