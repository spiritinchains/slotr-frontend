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
          <Route path="/">
            <Route index  element={<HomePage />} />
            <Route path="edit/:tid" element={<EditPage />} />
            <Route path="view" element={<ViewPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
