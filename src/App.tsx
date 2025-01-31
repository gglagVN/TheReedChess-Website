import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Router basename="TheReedChess-Website">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Thêm các routes khác nếu cần */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
