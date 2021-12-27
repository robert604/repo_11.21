import { useSelector,useDispatch } from "react-redux"
import { voteForAnecdote } from "../reducers/anecdoteReducer"
import { setNotification,turnOffNotification } from "../reducers/notificationReducer"



const AnecdoteList = props => {
    const dispatch = useDispatch()    
    const vote = (anecdote) => {
        const {id,content} = anecdote
        dispatch(voteForAnecdote(anecdote))
        dispatch(setNotification(`You voted for: ${content}`))
        setTimeout(() => {
            dispatch(turnOffNotification())
        },5000)
    }

    const anecdotes = useSelector(({anecdotes,filterText}) => {
        //console.log('in use selector',anecdotes)
        if(filterText!=='') {
            const re = new RegExp(filterText)
            anecdotes = anecdotes.filter(anecdote => re.test(anecdote.content))
        }
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