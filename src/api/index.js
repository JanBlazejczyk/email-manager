const SUBSCRIBERS_URL = 'https://api.airtable.com/v0/appEI6OkMBbhnzeas/Subscribers?api_key=key1DrhlGhrBgLjhU';
const CAMPAIGNS_URL = 'https://api.airtable.com/v0/appEI6OkMBbhnzeas/Campaigns?api_key=key1DrhlGhrBgLjhU';

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

