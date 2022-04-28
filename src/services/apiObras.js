import axios from 'axios'

const apiObras = axios.create({
    baseURL: 'https://api.artic.edu/api/v1',
})

export default apiObras