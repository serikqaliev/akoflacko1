import sty from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={sty.dialog}>
            <NavLink to={path}>
                <div className={sty.dialogItemContainer}>
                    <img className={sty.profilePic} src={props.pic}/>
                    <div>{props.name}</div>
                </div>
            </NavLink>
        </div>
    );
}

export default DialogItem;