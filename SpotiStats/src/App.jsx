import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NavBar from "./components/NavBar";
import StatsPage from "./pages/StatsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/callback" element={<StatsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
