import sty from './Friends.module.css'
import {NavLink} from "react-router-dom";

const Friends = (props) => {
    let path = `/profile/${props.id}`;
    return (
        <div className={sty.container}>
                <NavLink to={path}>
                    <img className={sty.profilePic} src={props.pic} alt={props.name}/>
                    <div>
                        {props.name}
                    </div>
                </NavLink>
        </div>
    );
}

export default Friends;