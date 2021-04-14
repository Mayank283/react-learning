import axios from "axios"

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}

const restClient = {
    put: (url, requestBody) => {
        this.method = 'delete'
        this.url = url
        this.requestBody = requestBody
        return restClient;
    },
    post: (url, requestBody) => {
        this.method = 'post'
        this.url = url
        this.requestBody = requestBody
        return restClient;
    },
    get: (url) => {
        this.method = 'get'
        this.url = url
        this.requestBody = null
        return restClient;
    },
    delete: (url) => {
        this.method = 'delete'
        this.url = url
        this.requestBody = null
        return restClient;
    },
    queryParams: (queryParameters) => {
        axiosConfig = {
            ...axiosConfig,
            params: queryParameters
        }
        return restClient;
    },
    pathVariables: (pathVariables) => {
        Object.keys(pathVariables).forEach(key => {
            this.url = this.url.replace(`:${key}`, encodeURIComponent(pathVariables[key]))
        })
        return restClient
    },
    headers: (header) => {
        axiosConfig = { ...axiosConfig, headers: { ...axiosConfig.headers, ...header } }
    },
    execute: () => {
        switch (this.method) {
            case 'get':
            case 'delete':
                axios[this.method](this.url, axiosConfig).then(response => {
                    console.log(response)
                }, error => {
                    console.log(error)
                })
                break;
            case 'post':
            case 'put':
                axios[this.method](this.url, this.requestBody, axiosConfig).then(response => {
                    console.log(response)
                }, error => {
                    console.log(error)
                })
                break;
        }
    }
}

export default restClient;