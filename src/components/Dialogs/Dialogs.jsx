import sty from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} pic={d.pic}/>);
    let newMessageElement = React.createRef();

    let sendMessage = () => {
        let action = sendMessageCreator();
        props.dispatch(action);
    };

    let onMessageChange = (e) => {
        let text = e.target.value;
        let action = updateNewMessageTextCreator(text);
        props.dispatch(action);
    };

    return (
        <div className={sty.dialogs}>
            <div className={sty.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={sty.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea placeholder='Введите ваше сообщение' onChange={onMessageChange} ref={newMessageElement} value={props.state.newMessageText}></textarea>
                    </div>
                    <div>
                        <button onClick={sendMessage}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;