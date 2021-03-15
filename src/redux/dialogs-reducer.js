const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'MNE_TEMNO' },
        { id: 2, name: 'Kleopatra' },
        { id: 3, name: 'Soldat' }
    ],
    messages: [
        { id: 1, message: 'How are you ?' },
        { id: 2, message: 'What is up man!' },
        { id: 3, message: 'Yoooo!!!' }
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 7, message: body }]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE, newMessageBody
    }
}

export default dialogsReducer;