
import React from 'react'
import {useSelector} from 'react-redux'

const Notification = () => {
  const {message,isVisible} = useSelector(({notification}) => notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    isVisible ?
      <div style={style}>
        {message}
      </div> :
      <div></div>
  )
}

export default Notification