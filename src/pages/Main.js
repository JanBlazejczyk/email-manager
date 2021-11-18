import { AddCampaignForm, AddSubscriberForm } from "../components/Forms";
import { Dialog } from "../components/Dialog";
import { AddButton, MainButton } from "../components/Buttons";
import { useState } from "react";

import "./Main.scss";


export function Main() {
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
      <h2 className="main__title">Email Sender</h2>
      <div className="main__buttons-container">
        <MainButton label="Subscribers" />
        <MainButton label="Campaigns" />
        <div className="main__buttons-container--add">
          <AddButton openDialog={handleSubscriberFormOpen} />
        </div>
        <div className="main__buttons-container--add">
          <AddButton openDialog={handleCampaignFormOpen} />
        </div>
        <Dialog active={addCampaignFormOpen} closeDialog={handleDialogClose}>
          <AddCampaignForm closeDialog={handleDialogClose} />
        </Dialog>
        <Dialog active={addSubscriberFormOpen} closeDialog={handleDialogClose}>
          <AddSubscriberForm closeDialog={handleDialogClose} />
        </Dialog>
      </div>
    </div>
  );
}