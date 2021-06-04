const baseUrl = process.env.REACT_APP_API_URL;

const fetchSinToken = (endpoint, data, method = 'GET') => {
    const url = `${baseUrl}/${endpoint}`;

    if (method === 'GET') {
        return fetch(url);
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
}

const fetchConToken = (endpoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endpoint}`;
    const token = localStorage.getItem("token") || '';
    if (method === 'GET') {
        return fetch(url, {
            method,
            headers: {
                'x-token': token
            }
        });
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify(data)
        })
    }
}

function formDataImage(inputData) {
    let formData = new FormData();
    Object.keys(inputData).forEach(fieldName => {
        formData.append(fieldName, inputData[fieldName]);
    })
    return formData
}

const fetchConTokenImage = (endpoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endpoint}`;
    const token = localStorage.getItem("token") || '';

    if (method === 'GET') {
        return fetch(url, {
            method,
            headers: {
                'x-token': token
            }
        });
    } else {
        //const dataToServer = new FormData();
        const dataToServer = formDataImage(data);
        //Object.keys(data).forEach(key => dataToServer.append(key, object[key]));
        console.log("datatoserver", dataToServer);
        return fetch(url, {
            method,
            headers: {
                'x-token': token
            },
            body: dataToServer
        })
    }
}

export {
    fetchSinToken,
    fetchConToken,
    fetchConTokenImage
}