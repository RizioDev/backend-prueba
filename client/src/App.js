import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import { Home } from "./components/Home/Home.jsx";
import Detail from "./components/Detail/Detail.jsx";
import ActivityCreate from "./components/ActivityCreate/ActivityCreate.jsx";
import WithoutNav from "./components/NavBar/WithoutNav";
import WithNav from "./components/NavBar/WithNav";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/";

export default function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <BrowserRouter>
        <Routes>
          <Route element={<WithoutNav />}>
            <Route path="/" element={<LandingPage />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/countries" element={<Home />} />
            <Route path="/countries/:id" element={<Detail />} />
            <Route path="/activity" element={<ActivityCreate />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
