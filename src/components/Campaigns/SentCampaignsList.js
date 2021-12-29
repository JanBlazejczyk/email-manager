import Moment from "react-moment";
import { DeleteButton } from "../Buttons";


function SentCampaignsList({ campaigns, keyValue, handleDelete }) {
  return (
    <div className="campaigns__list">
      {campaigns.filter((campaign) => campaign.fields["Status"] === "Sent").length === 0 ? <p>No sent campaigns</p> :
        campaigns.filter((campaign) => campaign.fields["Status"] === "Sent").map(campaign => (
          <div id={campaign.id} key={`${keyValue}-${campaign.id}`}>
            Subject: {campaign.fields.Subject}<br />
            Content: {campaign.fields.Content}
            Sent: <Moment format="DD.MM.YYYY HH:mm">{Number(campaign.fields.Send)}</Moment>
            <div onClick={handleDelete} id={campaign.id}><DeleteButton /></div>
          </div>
        ))
      }
    </div>
  );
}

export default SentCampaignsList;