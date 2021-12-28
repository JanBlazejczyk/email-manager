import { CampaignForm, AddSubscriberForm } from "../components/Forms";
import { Dialog } from "../components/Dialog";
import { AddButton, MainButton } from "../components/Buttons";
import { useState } from "react";

import { Link } from "react-router-dom";

import "./Main.scss";


function Main() {
  const [addSubscriberFormOpen, setSubscriberFormOpen] = useState(false);
  const [addCampaignFormOpen, setCampaignFormOpen] = useState(false);

  const handleSubscriberFormOpen = () => {
    setCampaignFormOpen(false);
    setSubscriberFormOpen(true);
  }
  const handleCampaignFormOpen = () => {
    setSubscriberFormOpen(false);
    setCampaignFormOpen(true);
  }
  const handleDialogClose = () => {
    setSubscriberFormOpen(false);
    setCampaignFormOpen(false);
  }

  return (
    <div className="main">
      <h2 className="main__title">E-mail Manager</h2>
      <div className="main__buttons-container">
        <div className="main__buttons-container--category">
          <Link to="/subscribers"><MainButton label="Subscribers" /></Link>
          <AddButton openDialog={handleSubscriberFormOpen} />
        </div>
        <div className="main__buttons-container--category">
          <Link to="/campaigns"><MainButton label="Campaigns" /></Link>
          <AddButton openDialog={handleCampaignFormOpen} />
        </div>
        <Dialog title="Add New Campaign" active={addCampaignFormOpen} closeDialog={handleDialogClose}>
          <CampaignForm closeDialog={handleDialogClose} />
        </Dialog>
        <Dialog title="Add Subscriber" active={addSubscriberFormOpen} closeDialog={handleDialogClose}>
          <AddSubscriberForm closeDialog={handleDialogClose} />
        </Dialog>
      </div>
    </div>
  );
}

export default Main;