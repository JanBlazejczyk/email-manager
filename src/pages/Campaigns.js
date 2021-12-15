import { useState, useEffect } from "react";
import { DeleteButton, EditButton, SendButton } from "../components/Buttons";
import { Dialog } from "../components/Dialog";
import { CampaignForm } from "../components/Forms";
import { deleteCampaign, getCampaigns, getSubscribers, editCampaign, sendEmails, addCampaignToSubscriber } from "../api";

import "./Campaigns.scss";
import Moment from "react-moment";

function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [addCampaignFormOpen, setCampaignFormOpen] = useState(false);
  const [defaultSubjectField, setDefaultSubjectField] = useState(null);
  const [defaultContentField, setDefaultContentField] = useState(null);
  const [defaultGreetingField, setDefaultGreetingField] = useState(null);
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

  const changeCampaignStatus = (id) => {
    let data = { Status: "Sent" }
    editCampaign(id, data);
  }

  const addCampaignSendDate = (id) => {
    let data = { Send: Date.now().toString() };
    editCampaign(id, data);
  }

  const handleSending = (event) => {
    let content = null;
    let subject = null;
    let greeting = null;
    let campaignId = null;
    for (let campaign of campaigns) {
      if (campaign.id === event.currentTarget.id) {
        content = campaign.fields.Content;
        subject = campaign.fields.Subject;
        greeting = campaign.fields.Greeting;
        campaignId = campaign.id;
        changeCampaignStatus(campaignId);
        addCampaignSendDate(campaignId);
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
  }, [campaigns]);

  useEffect(() => {
    saveCampaignsInState();
    saveSubscribersInState();
  }, []);

  return (
    <div className="campaigns-list">
      <h3>Drafts</h3>
      {campaigns.filter((campaign) => campaign.fields["Status"] === "Draft").map(campaign => (
        <div id={campaign.id} key={campaign.id}>
          Subject: {campaign.fields.Subject}<br />
          Content: {campaign.fields.Content}
          <div onClick={handleDelete} id={campaign.id}><DeleteButton /></div>
          <div onClick={handleCampaignFormOpen} id={campaign.id}><EditButton /></div>
          <div onClick={handleSending} id={campaign.id}><SendButton /></div>
          <Dialog active={addCampaignFormOpen} closeDialog={handleDialogClose}>
            <CampaignForm activeId={idToEdit} update={true} subjectContent={defaultSubjectField} emailContent={defaultContentField} greetingContent={defaultGreetingField} closeDialog={handleDialogClose} edit={handleEdit} />
          </Dialog>
        </div>
      ))
      }

      <h3>Send Campaigns</h3>
      {campaigns.filter((campaign) => campaign.fields["Status"] === "Sent").map(campaign => (
        <div id={campaign.id} key={campaign.id}>
          Subject: {campaign.fields.Subject}<br />
          Content: {campaign.fields.Content}
          Sent: <Moment format="DD.MM.YYYY HH:mm">{Number(campaign.fields.Send)}</Moment>
          <div onClick={handleDelete} id={campaign.id}><DeleteButton /></div>
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