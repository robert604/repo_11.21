import { useDispatch,useSelector } from "react-redux"
import { addNewAnecdote } from "../reducers/anecdoteReducer"

const AnecdoteForm = (props) => {
    const dispatch = useDispatch()
        
    const createNew = event => {
        event.preventDefault()
        const content = event.target.anecdote_text.value  
        dispatch(addNewAnecdote(content))
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