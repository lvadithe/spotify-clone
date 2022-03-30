/* https://developer.spotify.com/documentation/web-playback-sdk/quick-start/# */

export const authEndpoint = 'https://accounts.spotify.com/authorize';

const redirectUri = 'http://localhost:3000/';

const clientId = '23f872f9468c49729fdfe81750820311';

const scopes = [
    'user-read-currently-playing', 
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=');
        })
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;

/* 
1. click login button
2. redirect to spotify login page
3. redirect to once logged in
*/
