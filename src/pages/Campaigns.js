import { useState, useEffect } from "react";
import { DeleteButton, EditButton } from "../components/Buttons";
import { Dialog } from "../components/Dialog";
import { AddCampaignForm } from "../components/Forms";
import { deleteCampaign, getCampaigns } from "../api";

import "./Campaigns.scss";

function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);
  const [addCampaignFormOpen, setCampaignFormOpen] = useState(false);

  const handleCampaignFormOpen = () => {
    setCampaignFormOpen(true);
  }
  const handleDialogClose = () => {
    setCampaignFormOpen(false);
  }

  const saveCampaignsInState = () => {
    getCampaigns()
      .then(request => request.json())
      .then(data => { setCampaigns(data.records); console.log(data.records) })
      .catch(error => console.error(error));
  }

  const handleDelete = (event) => {
    // deletes the subscriber with the given id from the database
    console.log("hitted id:", event.currentTarget.id)
    deleteCampaign(event.currentTarget.id)
      .then(() => saveCampaignsInState());
  }

  useEffect(() => {
    saveCampaignsInState();
  }, []);

  return (
    <div className="campaigns">
      <div className="campaigns-list">
        <h3>Campaigns</h3>
        {campaigns.map(campaign => (
          <div id={campaign.id} key={campaign.id}>
            Subject: {campaign.fields.Subject}<br />
            Content: {campaign.fields.Content}
            <div onClick={handleDelete} id={campaign.id}><DeleteButton /></div>
            <div onClick={handleCampaignFormOpen} id={campaign.id}><EditButton /></div>
          </div>
        ))
        }
      </div>
      <Dialog active={addCampaignFormOpen} closeDialog={handleDialogClose}>
        <AddCampaignForm closeDialog={handleDialogClose} />
      </Dialog>
    </div>
  );
}

export default Campaigns;