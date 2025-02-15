import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
// Import the Team page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/team" element={<Layout page="team" />} />
        <Route path="/who-we-are" element={<Layout page="who-we-are" />} />
        <Route path="/pre-register" element={<Layout page="pre-register" />} />
      </Routes>
    </Router>
  );
}

export default App;
