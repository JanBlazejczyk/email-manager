const SUBSCRIBERS_URL = `https://api.airtable.com/v0/appEI6OkMBbhnzeas/Subscribers?api_key=${process.env.REACT_APP_AIRTABLE_API_KEY}`;
const CAMPAIGNS_URL = `https://api.airtable.com/v0/appEI6OkMBbhnzeas/Campaigns?api_key=${process.env.REACT_APP_AIRTABLE_API_KEY}`;

const add = (url, data) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fields: data })
  }
  fetch(url, config);
}

const _delete = (url) => {
  const config = { method: 'DELETE', }
  return fetch(url, config);
}

const get = (url) => {
  return fetch(url)
}

export const addSubscriber = (data) => {
  return add(SUBSCRIBERS_URL, data);
}

export const addCampaign = (data) => {
  return add(CAMPAIGNS_URL, data);
}

export const deleteSubscriber = (id) => {
  console.log("ID to delete:", id);
  const url = `https://api.airtable.com/v0/appEI6OkMBbhnzeas/Subscribers/${id}?api_key=${process.env.REACT_APP_AIRTABLE_API_KEY}`;
  return _delete(url);
}

export const deleteCampaign = (id) => {
  const url = `https://api.airtable.com/v0/appEI6OkMBbhnzeas/Campaigns/${id}?api_key=${process.env.REACT_APP_AIRTABLE_API_KEY}`;
  return _delete(url);
}

export const getSubscribers = () => {
  return get(SUBSCRIBERS_URL);
}

export const getCampaigns = () => {
  return get(CAMPAIGNS_URL);
}