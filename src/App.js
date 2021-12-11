import './App.css';
import { Main, Subscribers, Campaigns } from "./pages";
import { SubscriberDetails } from "./components/SubscriberDetails"

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Routes>
          <Route path="/subscribers" element={<Subscribers />} />
          <Route path="/subscribers/:subscriberId" element={<SubscriberDetails />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
