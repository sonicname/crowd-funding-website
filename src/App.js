import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SignInPage from "./pages/SignInPage";

const SignUpPage = lazy(() => import("./pages/SignUpPage"));

const App = () => {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/sign-in" element={<SignInPage />} />
    </Routes>
  );
};

export default App;
