import { AddCampaignForm, AddSubscriberForm } from "../components/Forms";
import { Dialog } from "../components/Dialog";
import { AddButton, MainButton } from "../components/Buttons";
import { useState } from "react";


export function Main() {
  const [addSubscriberFormOpen, setSubscriberFormOpen] = useState(false);
  const [addCampaignFormOpen, setCampaignFormOpen] = useState(false);

  // add addButton components that will set the state of Forms to true

  // Forms live inside of the dialog component which is displayed at the center of the page
  // Dialog has a close button and the function that is used for closing it is passed as a prop

  return (
    <div className="main__container">
      <h2>Email Sender</h2>
      <MainButton label="Subscribers" />
      <MainButton label="Campaigns" />
      <AddButton />
      <AddButton />
      <Dialog>
        <AddCampaignForm />
      </Dialog>

      <AddSubscriberForm />
    </div>
  );
}