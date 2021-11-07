import sty from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
    let friendsElements = props.state.dialogs.map(d => <Friends id={d.id} name={d.name} pic={d.pic}/>);

    return (
        <nav className={sty.nav}>
            <div className={sty.item}>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={sty.item}>
                <NavLink to="/dialogs">Messages</NavLink>
            </div>
            <div className={sty.item}>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={sty.item}>
                <NavLink to="/music">Music</NavLink>
            </div>
            <div className={sty.item}>
                <NavLink to="/settings">Settings</NavLink>
            </div>
            <div className={sty.navbarText}>Friends</div>
            <div className={sty.friendsContainer}>
                {friendsElements}
            </div>
        </nav>
    );
};

export default Navbar;
