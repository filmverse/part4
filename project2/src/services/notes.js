import axios from 'axios';

const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = (addNote) => {
    return axios.post(baseUrl, addNote)
}

const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

const update = (id, toggleNote) => {
    return axios.put(`${baseUrl}/${id}`, toggleNote)
}

const noteApp = { getAll, create, remove, update }

export default noteApp;