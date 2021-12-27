import { useDispatch,useSelector } from "react-redux"
import { addNewAnecdote,asObject } from "../reducers/anecdoteReducer"
import { setNotification,turnOffNotification } from "../reducers/notificationReducer"

const AnecdoteForm = (props) => {
    const dispatch = useDispatch()
        
    const createNew = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote_text.value
        event.target.anecdote_text.value = ''
        dispatch(addNewAnecdote(content))
        dispatch(setNotification(`You added: ${content}`))
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