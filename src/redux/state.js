import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you ?', likesCount: 5 },
                { id: 2, message: 'It is my first post', likesCount: 10 }
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Bruisya' },
                { id: 2, name: 'Semeniovich' },
                { id: 3, name: 'Soldat' },
                { id: 4, name: 'Young Yougn' },
                { id: 5, name: 'MNE_TEMNO' },
                { id: 6, name: 'Kleopatra' }
            ],
            messages: [
                { id: 1, message: 'How are you ?' },
                { id: 2, message: 'What is up man!' },
                { id: 3, message: 'Yoooo!!!' },
                { id: 4, message: 'What is up man!' },
                { id: 5, message: 'What is up man!' },
                { id: 6, message: 'What is up man!' }
            ],
            newMessageBody: ''
        },
        sideBar: {}
    },
    _callSubscriber() {
        console.log('state change')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;

window.state = store;

