import { URL_HOST, get_user_token } from './base';

export async function fetchSearch({ name = "" }) {
    var response = await fetch(`${URL_HOST}/api/user/search?name=${name}`, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${get_user_token()}`
        }
    })
    if (!response.ok) {
        const json = await response.json()
        throw new Error(json.message);
    }
    const json = await response.json();
    console.log(json);
    return json
}
