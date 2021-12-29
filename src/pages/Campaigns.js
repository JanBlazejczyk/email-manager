import { useState, useEffect } from "react";
import { CampaignsHeader, SentCampaignsList, DraftCampaignsList } from "../components/Campaigns";
import { deleteCampaign, getCampaigns, getSubscribers, editCampaign, sendEmails, addCampaignToSubscriber, changeCampaignStatus, addCampaignSendDate } from "../api";

import "../components/Buttons/Buttons.scss";
import "./Campaigns.scss";

function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [addCampaignFormOpen, setCampaignFormOpen] = useState(false);
  const [defaultSubjectField, setDefaultSubjectField] = useState(null);
  const [defaultContentField, setDefaultContentField] = useState(null);
  const [defaultGreetingField, setDefaultGreetingField] = useState(null);
  const [idToEdit, setIdToEdit] = useState(null);
  const [display, setDisplay] = useState("drafts");

  const displaySent = () => {
    setDisplay("sent");
  }

  const displayDrafts = () => {
    setDisplay("drafts");
  }

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
        setDefaultGreetingField(campaign.fields.Greeting);
        setIdToEdit(event.currentTarget.id);
      }
    }
  }

  const saveCampaignsInState = () => {
    getCampaigns()
      .then(request => request.json())
      .then(data => setCampaigns(data.records))
      .catch(error => console.error(error));
  }

  const saveSubscribersInState = () => {
    getSubscribers()
      .then(request => request.json())
      .then(data => setSubscribers(data.records))
      .catch(error => console.error(error));
  }

  const handleSending = async (event) => {
    let content = null;
    let subject = null;
    let greeting = null;
    let campaignId = null;
    for (let campaign of campaigns) {
      if (event.currentTarget && campaign.id === event.currentTarget.id) {
        content = campaign.fields.Content;
        subject = campaign.fields.Subject;
        greeting = campaign.fields.Greeting;
        campaignId = campaign.id;
        await changeCampaignStatus(campaignId)
        await addCampaignSendDate(campaignId)
        saveCampaignsInState();
      }
    }
    subscribers.forEach((subscriber) => {
      let address = subscriber.fields["E-mail"];
      let name = subscriber.fields.Name;
      sendEmails(address, content, subject, name, greeting);
      addCampaignToSubscriber(subscriber.id, campaignId);
    })
  }

  const handleEdit = (id, data) => {
    editCampaign(id, data)
      .then(() => saveCampaignsInState());
  }

  const handleDelete = (event) => {
    deleteCampaign(event.currentTarget.id)
      .then(() => saveCampaignsInState());
  }

  useEffect(() => {
    saveCampaignsInState();
    saveSubscribersInState();
  }, []);

  return (
    <div className="campaigns__container">
      <CampaignsHeader handleDraftDisplay={displayDrafts} handleSentDisplay={displaySent} displayed={display} />

      {display === "drafts" ?
        <DraftCampaignsList
          campaigns={campaigns}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleSending={handleSending}
          handleDialogClose={handleDialogClose}
          handleCampaignFormOpen={handleCampaignFormOpen}
          addCampaignFormOpen={addCampaignFormOpen}
          idToEdit={idToEdit}
          defaultSubjectField={defaultSubjectField}
          defaultContentField={defaultContentField}
          defaultGreetingField={defaultGreetingField}
        /> :
        <SentCampaignsList campaigns={campaigns} handleDelete={handleDelete} />
      }
    </div>
  );
}

export default Campaigns;