import axios from './axios-client.js'

export default async function getQuotes() {
    return axios.get('quotes').then(Response => {
        return Response.data.quotes})
}