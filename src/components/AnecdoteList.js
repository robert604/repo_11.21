import { useSelector,useDispatch } from "react-redux"
import { voteForAnecdote } from "../reducers/anecdoteReducer"
import { setNotification,turnOffNotification } from "../reducers/notificationReducer"



const AnecdoteList = props => {
    const dispatch = useDispatch()    
    const vote = ({id,content}) => {
        dispatch(voteForAnecdote(id))
        dispatch(setNotification(`You voted for: ${content}`))
        setTimeout(() => {
            dispatch(turnOffNotification())
        },5000)
    }

    const anecdotes = useSelector(({anecdotes}) => {
        const newstate = [...anecdotes].sort((a,b)=>b.votes-a.votes)
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
                    <button onClick={() => vote(anecdote)}>vote</button>
                </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList