import SignInPage from "pages/SignInPage";
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
function App() {
  const SignUpPage = lazy(() => import("./pages/SignUpPage"));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
