import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const DashBoardPage = lazy(() => import('./pages/DashBoardPage'));

const App = () => {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route path="/" element={<DashBoardPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
