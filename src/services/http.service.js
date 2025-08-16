import axios from 'axios';
import config from '../config';

export function HTTP(method, uri, data, headers = null, fullUrl) {
    return new Promise((resolve, reject) => {
        let url;
        if (!uri && fullUrl) {
            url = fullUrl;
        } else {
            url = `${process.env.REACT_APP_API_URL}${uri}`.trim();
        }

        const query = {
            method: method,
            url: url
        }

        if (headers != null) {
            query.headers = headers;
        }
        if (method === 'post' || method === 'put' || method === 'delete'|| method === 'PATCH') {
            query.data = data;
        }
        axios(query).then(function(response) {
          resolve(response);
        })
        .catch((error) => {
            reject(error)

        })
    })
}