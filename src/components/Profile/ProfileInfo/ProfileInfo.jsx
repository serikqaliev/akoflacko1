import sty from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img
                    src="https://ioboot.in/wp-content/uploads/2019/03/image.jfi"
                ></img>
            </div>
            <div className={sty.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;
