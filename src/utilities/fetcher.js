export default async function fetcher(endpoint) {
    let response = await fetch(endpoint);
    let json = await response.json();
    if (!response.ok) {
        throw response;
    }
    return json;
}