import { URL_HOST, get_user_token } from './base';

export async function fetchSignup(data) {
    var response = await fetch(`${URL_HOST}/api/Auth/register/`, {
        method: 'POST',
        body: data,
    })
    if (!response.ok) {
        const json = await response.json()
        throw new Error(json.message);
    }
    const json = await response.json();
    console.log(json);
    return json
}

export async function fetchSignin(data) {
    var response = await fetch(`${URL_HOST}/api/Auth/login/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
    if (!response.ok) {
        const json = await response.json()
        throw new Error(json.message);
    }
    const json = await response.json();

    return json
}

export async function fetchAuthMe() {
    var response = await fetch(`${URL_HOST}/api/Auth/me/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${get_user_token()}`
        },
    })
    if (!response.ok) {
        throw new Error("No auth");
    }
    const json = await response.json();

    return json
}

export async function fetchAuthCheck() {
    var response = await fetch(`${URL_HOST}/api/Auth/check/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${get_user_token()}`
        },
    })
    if (!response.ok) {
        throw new Error("No auth");
    }
    const json = await response.json();

    return json
}