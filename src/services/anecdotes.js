import axios from 'axios'

const url = '/anecdotes'
//const url = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  try {
    const resp = await axios.get(url)
    //console.log('getall--',process.env)
    return resp.data
  } catch(error) {
    console.log('getall error',error)
  }
}

const createNew = async (anecdote) => {
  const resp = await axios.post(url,anecdote)
  return resp.data
}

const update = async (anecdote) => {
  const {id} = anecdote
  const urlPlusId = `${url}/${id}`
  const resp = await axios.put(urlPlusId,anecdote)
  return resp.data
}

export default {getAll,createNew,update}