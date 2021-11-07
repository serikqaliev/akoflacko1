import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Akzhol', pic: 'https://cs16planet.ru/steam-avatars/images/avatar3219.jpg'},
                {id: 2, name: 'Sasuke', pic: 'https://cs16planet.ru/steam-avatars/images/avatar3219.jpg'},
                {id: 3, name: 'Naruto', pic: 'https://cs16planet.ru/steam-avatars/images/avatar3219.jpg'},
                {id: 4, name: 'Itachi', pic: 'https://cs16planet.ru/steam-avatars/images/avatar3219.jpg'},
                {id: 5, name: 'Madara', pic: 'https://cs16planet.ru/steam-avatars/images/avatar3219.jpg'},
                {id: 6, name: 'Kabuto', pic: 'https://cs16planet.ru/steam-avatars/images/avatar3219.jpg'}
            ],
            messages: [
                {id: 1, message: 'Lorem ipsum dolor sit amet.'},
                {id: 2, message: 'Lorem ipsum dolor.'},
                {id: 3, message: 'Lorem ipsum dolor sit.'},
                {id: 4, message: 'Lorem ipsum dolor..'},
                {id: 5, message: 'Lorem ipsum dolor..'},
                {id: 6, message: 'Lorem ipsum dolor..'}
            ],
            newMessageText: 'ako-flacko'
        },
        profilePage: {
            posts: [
                {id: 1, message: 'Hi!', likesCount: 13},
                {id: 2, message: 'It\'s my first post!', likesCount: 27},
                {
                    id: 3,
                    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, sequi!',
                    likesCount: 27
                }
            ],
            newPostText: 'ako-flacko'
        },
        sidebar: {
            dialogs: [
                {id: 1, name: 'Akzhol', pic: 'https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg'},
                {id: 2, name: 'Sasuke', pic: 'https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg'},
                {id: 3, name: 'Naruto', pic: 'https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg'},
                {id: 4, name: 'Itachi', pic: 'https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg'},
                {id: 5, name: 'Madara', pic: 'https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg'},
                {id: 6, name: 'Kabuto', pic: 'https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg'}
            ]
        }
    },
    _callSubscriber() {
        console.log('no subscriber');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { // { type: 'ADD-POST' }
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state)
    }
};

export default store;
window.store = store;