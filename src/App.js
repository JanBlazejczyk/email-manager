import './App.css';
import { AddSubscriberForm } from "./components/AddSubscriberForm";
import { AddCampaignForm } from "./components/AddCampaignForm";


function App() {
  return (
    <div className="App">
      <h1>Campaign app</h1>
      <AddSubscriberForm />
      <AddCampaignForm />
    </div>
  );
}

export default App;
