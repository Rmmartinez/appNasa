const API_KEY = 'GGdqT1qDcFPTYxKNqvO8n4bMft0JctcB9H77E4W1';
const API_URL = 'https://api.nasa.gov/planetary/apod';


export default async (urlParams?: string) => {
    try{
        const response = await fetch(
            `${API_URL}?api_key=${API_KEY}${
            typeof urlParams !== 'undefined'
            && urlParams?.length > 0 ? urlParams
            :''
        }`,
        );
    const data = await response.json();
    return Promise.resolve(data);

    }catch(error){
        return Promise.reject(error);
    }
}


