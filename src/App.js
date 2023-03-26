import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
function App() {
  const SignUpPage = lazy(() => import("./pages/SignUpPage"));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/" element={<div>Hello</div>} />
      </Routes>
    </Suspense>
  );
}

export default App;
