import React from 'react';
import Preloader from '../../common/preloader/preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


const ProfileInfo = ({ profile, status, updateStatus }) => {
    if (!profile) {
        return <Preloader />
    }
    return <div>
        <div className={classes.descriptionBlock}>
            <img src={profile.photos.large} alt="Аватар пользователя" />
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
    </div>;
}

export default ProfileInfo;