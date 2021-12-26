import {useDispatch} from 'react-redux'
import {setFilter} from '../reducers/filterReducer'

const FilterForm = props => {
  const dispatch = useDispatch()
  const filterTextChange = (event) => {
    dispatch(setFilter(event.target.value))
  }

  return(
    <div>
      filter <input name='filterText' onChange={filterTextChange}/>
    </div>
  )
}

export default FilterForm