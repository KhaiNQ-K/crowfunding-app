import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
function App() {
  const SignUpPage = lazy(() => import("./pages/SignUpPage"));
  const SignInPage = lazy(() => import("./pages/SignInPage"));
  const DashboardPage = lazy(() => import("./pages/DashboardPage"));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
