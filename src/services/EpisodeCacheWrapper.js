import {get } from "./apiService"

const locationDetails = {}

const getEpisodesFromAPI = async(url) => {
    const data = await get(url)
    return data
}


// get the Episode details 
export const getEpisodesDetails = async(url) => {
    if (!locationDetails.url) {
        const d = await getEpisodesFromAPI(url).then(d => d)
        locationDetails[url] = d
    }
    return locationDetails[url]
}