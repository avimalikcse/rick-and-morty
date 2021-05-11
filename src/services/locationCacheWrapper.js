import {get } from "./apiService"

// variable to memorize details in local 
const locationDetails = {}

const getLocationFromAPI = async(url) => {
    const data = await get(url)
    return data
}

// get the location details, onces get the details, save in local memory to reduce duplicate api calls
export const getLocationDetails = async(url) => {
    if (!locationDetails.url) { // if not available locally, call api
        const d = await getLocationFromAPI(url).then(d => d)
        locationDetails[url] = d // once get the data, set the data locally 
    }
    return locationDetails[url]
}