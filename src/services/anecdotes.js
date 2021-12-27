import axios from 'axios'

const url = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const resp = await axios.get(url)
  return resp.data
}

const createNew = async (anecdote) => {
  const resp = await axios.post(url,anecdote)
  return resp.data
}

export default {getAll,createNew}