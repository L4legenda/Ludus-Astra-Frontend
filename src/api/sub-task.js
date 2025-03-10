import { URL_HOST, get_user_token } from './base';

export async function fetchGenerateSubTask(Description) {
    var response = await fetch(`${URL_HOST}/api/SubTask/generate-sub-task`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' ,
            "Authorization": `Bearer ${get_user_token()}`
        },
        body: JSON.stringify({
            "description": Description,
        })
    })
    if (!response.ok) {
        const json = await response.json()
        throw new Error(json.message);
    }
    const json = await response.json();
    console.log(json);
    return json
}