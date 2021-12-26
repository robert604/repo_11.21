
const initialState = {
    message: 'This is a notification',
    isVisible: false
}

const notificationReducer = (state=initialState,action) => {

    switch(action.type) {
        case 'SET_NOTIFICATION':
            //StartNotificationTimer()
            return {
                message:action.message,
                isVisible:true
            }
        case 'TURN_OFF_NOTIFICATION':
            return {...state,isVisible:false}
    }
    return state
}

export const setNotification = message => {
    return {
        type: 'SET_NOTIFICATION',
        message: message
    }
}

export const turnOffNotification = () => {
    return {
        type: 'TURN_OFF_NOTIFICATION'
    }
}

export default notificationReducer