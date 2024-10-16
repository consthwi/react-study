import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./page/Homepage";
import ReactQueryPage from "./page/ReactQueryPage";
import NormalPage from "./page/NormalPage";

function App() {
  return (
    <div className="App">
      <nav style={{ backgroundColor: "beige", padding: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>
          Homepage
        </Link>
        <Link style={{ marginRight: "10px" }} to="/normal">
          NormalPage
        </Link>
        <Link to="/react-query">React Query</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/normal" element={<NormalPage />} />
        <Route path="/react-query" element={<ReactQueryPage />} />
      </Routes>
    </div>
  );
}

export default App;
