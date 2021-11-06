import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

import HomePage from "./pages/HomePage";
import EditPage from "./pages/EditPage";
import ViewPage from "./pages/ViewPage";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/edit" element={<EditPage />} />
        </Routes>
        <Routes>
          <Route path="/view" element={<ViewPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
