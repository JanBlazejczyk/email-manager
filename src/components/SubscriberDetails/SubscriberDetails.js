import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { getSubscriber } from "../../api";

function SubscriberDetails() {
  const [subscriber, setSubscriber] = useState();
  let { subscriberId } = useParams()

  const saveSubscriberInState = (id) => {
    getSubscriber(id)
      .then(request => request.json())
      .then(data => { setSubscriber(data); console.log(data) })
      .catch(error => console.error(error));
  }

  useEffect(() => {
    console.log(subscriberId)
    saveSubscriberInState(subscriberId);
  }, [])

  if (subscriber) {
    return (
      <div>
        <div className="subscriber__name">
          Name: {subscriber?.fields["Name"]}
        </div>
        <div className="subscriber__email">
          Address: {subscriber?.fields["E-mail"]}
        </div>
        <div className="subscriber__added">
          Added: {subscriber?.fields["Created at"]}
        </div>
        <div className="subscriber__campaigns">
          Campaigns:
          {subscriber?.fields["Subject (from Campaigns)"] ? subscriber.fields["Subject (from Campaigns)"].map((campaign, index) => (<p id={`camp-${index}`} key={`camp-${index}`}>{campaign}</p>)) : null}
        </div>
      </div>
    );
  } else {
    return <div>We don't have any details</div>
  }
}

export default SubscriberDetails;