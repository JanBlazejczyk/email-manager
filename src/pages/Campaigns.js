import { useState, useEffect } from "react";
import { DeleteButton, EditButton } from "../components/Buttons";
import { Dialog } from "../components/Dialog";
import { CampaignForm } from "../components/Forms";
import { deleteCampaign, getCampaigns, editCampaign } from "../api";

import "./Campaigns.scss";

function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);
  const [addCampaignFormOpen, setCampaignFormOpen] = useState(false);
  const [defaultSubjectField, setDefaultSubjectField] = useState(null);
  const [defaultContentField, setDefaultContentField] = useState(null);
  const [idToEdit, setIdToEdit] = useState(null);

  const handleCampaignFormOpen = (event) => {
    getDefaultEditFormInput(event);
    setCampaignFormOpen(true);
  }
  const handleDialogClose = () => {
    setCampaignFormOpen(false);
  }

  const getDefaultEditFormInput = (event) => {
    for (let campaign of campaigns) {
      if (campaign.id === event.currentTarget.id) {
        setDefaultSubjectField(campaign.fields.Subject);
        setDefaultContentField(campaign.fields.Content);
        setIdToEdit(event.currentTarget.id);
      }
    }
  }

  const saveCampaignsInState = () => {
    getCampaigns()
      .then(request => request.json())
      .then(data => { setCampaigns(data.records); console.log(data.records) })
      .catch(error => console.error(error));
  }

  const handleEdit = (id, data) => {
    editCampaign(id, data)
      .then(() => saveCampaignsInState());
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
    <div className="campaigns-list">
      <h3>Campaigns</h3>
      {campaigns.map(campaign => (
        <div id={campaign.id} key={campaign.id}>
          Subject: {campaign.fields.Subject}<br />
          Content: {campaign.fields.Content}
          <div onClick={handleDelete} id={campaign.id}><DeleteButton /></div>
          <div onClick={handleCampaignFormOpen} id={campaign.id}><EditButton /></div>
          <Dialog active={addCampaignFormOpen} closeDialog={handleDialogClose}>
            <CampaignForm activeId={idToEdit} update={true} subjectContent={defaultSubjectField} emailContent={defaultContentField} closeDialog={handleDialogClose} edit={handleEdit} />
          </Dialog>
        </div>
      ))
      }
    </div>

  );
}

export default Campaigns;