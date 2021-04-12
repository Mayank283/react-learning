//import axios from "axios"
const axios = require('axios')

const url = 'https://jsonplaceholder.typicode.com/posts/:postId'

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'bz-token': '345'
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
    execute: () => {
        axios[this.method](this.url, axiosConfig).then(response => {
            console.log(response)
        }, error => {
            console.log(error)
        })
    }
}

restClient
    .get(url)
    //.queryParams({ 'id': 3 })
    .pathVariables({ 'postId': 1 })
    .execute()