import { init } from 'emailjs-com';

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

const edit = (url, data) => {
  const config = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fields: data })
  }
  return fetch(url, config);
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
  const url = `https://api.airtable.com/v0/appEI6OkMBbhnzeas/Subscribers/${id}?api_key=${process.env.REACT_APP_AIRTABLE_API_KEY}`;
  return _delete(url);
}

export const editCampaign = (id, data) => {
  const url = `https://api.airtable.com/v0/appEI6OkMBbhnzeas/Campaigns/${id}?api_key=${process.env.REACT_APP_AIRTABLE_API_KEY}`;
  return edit(url, data);
}

export const addCampaignToSubscriber = async (id, data) => {
  const url = `https://api.airtable.com/v0/appEI6OkMBbhnzeas/Subscribers/${id}?api_key=${process.env.REACT_APP_AIRTABLE_API_KEY}`;


  // get the id of campaigns that the user already has and store it in a variable (array)
  const alreadySavedCampaignsIds = await get(url)
    .then(response => response.json())
    .then(data => {
      if (data.fields["Campaigns"]) {
        return data.fields["Campaigns"]
      }
    })

  console.log("Previous IDs array:", alreadySavedCampaignsIds);

  // push data to this array
  alreadySavedCampaignsIds.push(data);
  console.log("Array after pushing new id", alreadySavedCampaignsIds);

  const config = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fields: { Campaigns: alreadySavedCampaignsIds } })
  }
  return fetch(url, config);
}

export const deleteCampaign = (id) => {
  const url = `https://api.airtable.com/v0/appEI6OkMBbhnzeas/Campaigns/${id}?api_key=${process.env.REACT_APP_AIRTABLE_API_KEY}`;
  return _delete(url);
}

export const getSubscriber = (id) => {
  const url = `https://api.airtable.com/v0/appEI6OkMBbhnzeas/Subscribers/${id}?api_key=${process.env.REACT_APP_AIRTABLE_API_KEY}`;
  get(url);
}

export const getSubscribers = () => {
  return get(SUBSCRIBERS_URL);
}

export const getCampaigns = () => {
  return get(CAMPAIGNS_URL);
}

// mail
const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const userId = process.env.REACT_APP_EMAILJS_USER_ID;
const token = process.env.REACT_APP_EMAILJS_TOKEN;
const baseUrl = "https://api.emailjs.com/api/v1.0/email/send";

export const sendEmails = (address, content, subject, name) => {
  let data = {
    service_id: serviceId,
    template_id: templateId,
    user_id: userId,
    accessToken: token,
    template_params: {
      subject: subject,
      content: content,
      name: name,
      email: address,
    }
  };

  let config = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  return fetch(baseUrl, config);
}