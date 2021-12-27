import { useDispatch,useSelector } from "react-redux"
import { addNewAnecdote,asObject } from "../reducers/anecdoteReducer"
import { setNotification,turnOffNotification } from "../reducers/notificationReducer"
import anecdoteServices from '../services/anecdotes'

const AnecdoteForm = (props) => {
    const dispatch = useDispatch()
        
    const createNew = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote_text.value
        const saved = await anecdoteServices.createNew(asObject(content))

        dispatch(addNewAnecdote(saved))
        dispatch(setNotification(`You added: ${saved}`))
        setTimeout(() => {
            dispatch(turnOffNotification())
        },5000)
    }

    return(
        <div>
            <h2>create new</h2>
            <form onSubmit={createNew}>
            <div><input name='anecdote_text'/></div>
            <button>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm