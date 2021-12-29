import { MainButton } from "../Buttons";

function CampaignsHeader({ handleDraftDisplay, handleSentDisplay, displayed }) {
    return (
        <div className="campaigns__header">
            <h3 className="campaigns__title">Campaigns</h3>

            {displayed === "drafts" ?
                <div className="campaigns__buttons">
                    <MainButton handleClick={handleDraftDisplay} label="Drafts" />
                    <MainButton handleClick={handleSentDisplay} label="Sent" notActive />
                </div> :
                <div className="campaigns__buttons">
                    <MainButton handleClick={handleDraftDisplay} label="Drafts" notActive />
                    <MainButton handleClick={handleSentDisplay} label="Sent" />
                </div>}
        </div>
    );
}

export default CampaignsHeader;