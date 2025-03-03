import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
// Import the Team page

function App() {
  return (
    <Router>
      <ScrollToTop>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/team" element={<Layout page="team" />} />
        <Route path="/who-we-are" element={<Layout page="who-we-are" />} />
        <Route path="/pre-register" element={<Layout page="pre-register" />} />
        <Route path="/news" element={<Layout page="news" />} />
        <Route path="/news/:articleId" element={<Layout page="article" />} />
        <Route path="/careers" element={<Layout page="careers" />} />
      </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
