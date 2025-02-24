import { URL_HOST } from './base';

export async function fetchSignup(data){
    var response = await fetch(`${URL_HOST}/api/Auth/register/`, {
        method: 'POST',
        body: data,
    })
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
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
        throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
    return json
}