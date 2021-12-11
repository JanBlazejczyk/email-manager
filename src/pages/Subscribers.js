import { useEffect, useState } from "react";
import { getSubscribers, deleteSubscriber } from "../api";

import { DeleteButton } from "../components/Buttons";

import "./Subscribers.scss";

function Subscribers() {
  const [subscribers, setSubscribers] = useState([]);

  const saveSubscribersInState = () => {
    getSubscribers()
      .then(request => request.json())
      .then(data => { setSubscribers(data.records); console.log(data.records) })
      .catch(error => console.error(error));
  }

  const handleDelete = (event) => {
    // deletes the subscriber with the given id from the database
    deleteSubscriber(event.currentTarget.id)
      .then(() => saveSubscribersInState());
  }

  useEffect(() => {
    saveSubscribersInState();
  }, []);

  // TODO solve the problem with the double keys
  return (
    <div className="subscribers-list">
      <h3>Subscribers</h3>
      {subscribers.map(subscriber => (
        <div id={subscriber.id} key={subscriber.id}>
          {subscriber.fields["Name"]}
          {subscriber.fields["E-mail"]}
          {subscriber.fields["Subject (from Campaigns)"] ? subscriber.fields["Subject (from Campaigns)"].map((campaign, index) => (<p id={`camp-${index}`} key={`camp-${index}`}>{campaign}</p>)) : null}
          <div onClick={handleDelete} id={subscriber.id}><DeleteButton deleteHandler={handleDelete} /></div>
        </div>
      ))}
    </div>
  );
}
export default Subscribers;