async function HeaderApi(url, method) {
    const headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    return await fetch(url, {
        headers: headers,
        method: method,
    })
}

export default HeaderApi;