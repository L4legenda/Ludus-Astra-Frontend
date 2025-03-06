import { URL_HOST, get_user_token } from './base';

export async function fetchGetProjects() {
    var response = await fetch(`${URL_HOST}/api/Projects`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json' ,
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

export async function fetchCreateProject(data) {
    var response = await fetch(`${URL_HOST}/api/Projects`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json' ,
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

export async function fetchAddMemberToProject(id_project, data) {
    var response = await fetch(`${URL_HOST}/api/Projects/${id_project}/add-user`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json' ,
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