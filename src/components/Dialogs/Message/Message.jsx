import sty from './../Dialogs.module.css'

const Message = (props) => {
    return (
        <div className={sty.dialog}>
            {props.message}
        </div>
    );
}

export default Message;