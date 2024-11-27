import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route index element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
