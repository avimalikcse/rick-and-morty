/**
 * Main wrapper file for API calling, would have diff methods for various calls like GET,POST,PUT
 * @param {*} url 
 */
export const get = (url) => {
    return fetch(url)
        .then(response => response.json())
        .then(data => data);
}