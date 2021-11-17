import { AddCampaignForm, AddSubscriberForm } from "../components/Forms";
import { Dialog } from "../components/Dialog";
import { AddButton, MainButton } from "../components/Buttons";
import { useState } from "react";


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
    <div className="main__container">
      <h2>Email Sender</h2>
      <MainButton label="Subscribers" />
      <MainButton label="Campaigns" />
      <AddButton openDialog={handleSubscriberFormOpen} />
      <AddButton openDialog={handleCampaignFormOpen} />
      <Dialog active={addCampaignFormOpen} closeDialog={handleDialogClose}>
        <AddCampaignForm closeDialog={handleDialogClose} />
      </Dialog>
      <Dialog active={addSubscriberFormOpen} closeDialog={handleDialogClose}>
        <AddSubscriberForm closeDialog={handleDialogClose} />
      </Dialog>
    </div>
  );
}