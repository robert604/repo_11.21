import { useSelector,useDispatch } from "react-redux"
import { voteForAnecdote } from "../reducers/anecdoteReducer"


const AnecdoteList = props => {
    const dispatch = useDispatch()    
    const vote = (id) => {
        dispatch(voteForAnecdote(id))
    }

    const anecdotes = useSelector(state => {
        const newstate = [...state].sort((a,b)=>b.votes-a.votes)
        return newstate
    })

    return(
        <div>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id)}>vote</button>
                </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList