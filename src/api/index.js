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

export const addSubscriber = (data) => {
    return add(SUBSCRIBERS_URL, data)
}

export const addCampaign = (data) => {
    return add(CAMPAIGNS_URL, data)
}

