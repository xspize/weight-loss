import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard';
import Frontpage from './pages/frontpage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Frontpage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
