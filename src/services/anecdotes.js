import axios from 'axios'

//const url = process.env.ON_HEROKU ?
//'http://morning-beyond-server.herokuapp.com/anecdotes' : 'http://localhost:3001/anecdotes'
const url = 'https://morning-beyond-server.herokuapp.com/anecdotes'

const getAll = async () => {
  try {
    const resp = await axios.get(url)
    console.log('getall',process.env.ON_HEROKU)
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