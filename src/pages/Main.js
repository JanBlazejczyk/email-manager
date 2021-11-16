import { AddCampaignForm } from "../components/AddCampaignForm";
import { AddSubscriberForm } from "../components/AddSubscriberForm";
import { MainButton } from "../components/MainButton";


export function Main() {
    return (
        <div className="main__container">
            <h2>Email Sender</h2>
            <MainButton label="Subscribers" />
            <MainButton label="Campaigns" />
            <AddCampaignForm />
            <AddSubscriberForm />
        </div>
    );
}