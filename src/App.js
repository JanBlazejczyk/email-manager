import { useState, useEffect } from "react";
import './App.css';
import { Main, Subscribers, Campaigns } from "./pages";
import { getSubscribers, getCampaigns } from "./api";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [subscribers, setSubscribers] = useState([]);
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    // figure out how to set the values to subscribers and campaigns
    getSubscribers();
    getCampaigns();
  }, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/subscribers" element={<Subscribers />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
