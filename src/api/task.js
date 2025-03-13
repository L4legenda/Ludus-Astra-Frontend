import { URL_HOST, get_user_token } from './base';

export async function fetchGetStatusTask() {
    var response = await fetch(`${URL_HOST}/api/Tasks/statuses`, {
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
export async function fetchGetPriorityTask() {
    var response = await fetch(`${URL_HOST}/api/Tasks/priority`, {
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

export async function fetchGetListTask(id_project, query) {
    var response = await fetch(`${URL_HOST}/api/tasks/project/${id_project}/search?query=${query}`, {
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

export async function fetchCreateTask(data) {
    var response = await fetch(`${URL_HOST}/api/Tasks/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' ,
            "Authorization": `Bearer ${get_user_token()}`,
        },
        body: JSON.stringify(data)
    })
    if (!response.ok) {
        const json = await response.json()
        throw new Error(json.message);
    }
    const json = await response.json();
    console.log(json);
    return json
}


export async function fetchCreateTask(id_task, data) {
    var response = await fetch(`${URL_HOST}/api/tasks/${id_task}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' ,
            "Authorization": `Bearer ${get_user_token()}`,
        },
        body: JSON.stringify(data)
    })
    if (!response.ok) {
        const json = await response.json()
        throw new Error(json.message);
    }
    const json = await response.json();
    console.log(json);
    return json
}