const initialMessage = 'This is a notification'

const notificationReducer = (state=initialMessage,action) => {
    console.log('notificationreducer',action)
    switch(action.type) {
        case 'SET_NOTIFICATION':
        return action.message
    }
    return state
}

export const setNotification = message => {
    return {
        type: 'SET_NOTIFICATION',
        message: message
    }
}

export default notificationReducer