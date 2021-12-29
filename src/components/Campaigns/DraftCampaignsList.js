import { DeleteButton, SendButton, EditButton } from "../Buttons";
import { Dialog } from "../Dialog";
import { CampaignForm } from "../Forms";


function SentCampaignsList({ campaigns, keyValue, handleDelete, handleEdit, handleSending, handleDialogClose, handleCampaignFormOpen, addCampaignFormOpen, idToEdit, defaultSubjectField, defaultContentField, defaultGreetingField }) {
  return (
    <div className="campaigns__list">
      {campaigns.filter((campaign) => campaign.fields["Status"] === "Draft").length === 0 ? <p>No drafts</p> :
        campaigns.filter((campaign) => campaign.fields["Status"] === "Draft").map(campaign => (
          <div id={campaign.id} key={`${keyValue}-${campaign.id}`}>
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
    </div>
  );
}

export default SentCampaignsList;