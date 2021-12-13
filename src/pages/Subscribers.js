import { useEffect, useState } from "react";
import { getSubscribers, deleteSubscriber } from "../api";
import { Link, useParams } from "react-router-dom";
import Moment from 'react-moment';

import { DeleteButton } from "../components/Buttons";

import "./Subscribers.scss";

function Subscribers() {
  const [subscribers, setSubscribers] = useState([]);
  let { subscriberId } = useParams();

  const saveSubscribersInState = () => {
    getSubscribers()
      .then(request => request.json())
      .then(data => setSubscribers(data.records))
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
          <div>
            Name: {subscriber.fields["Name"]}
          </div>
          <div>
            Added:
            <Moment format="DD.MM.YYYY HH:mm">
              {subscriber.fields["Created at"]}
            </Moment>

          </div>
          <div>
            <Link to={`/subscribers/${subscriber.id}`}>Details</Link>
          </div>
          <div onClick={handleDelete} id={subscriber.id}><DeleteButton deleteHandler={handleDelete} /></div>
        </div>
      ))}
    </div>
  );
}
export default Subscribers;