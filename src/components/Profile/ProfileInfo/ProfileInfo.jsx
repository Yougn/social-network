import React from 'react';
import Preloader from '../../common/preloader/preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userAvatar from '../../../assets/images/avatar.jpg'


const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    return <div>
        <div className={classes.descriptionBlock}>
            <img src={profile.photos.large || userAvatar} className={classes.userAvatar} alt="Аватар пользователя" />
            {isOwner && <input type={"file"} onChange={onMainPhotoSelected} className={classes.button} />}
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
    </div>;
}

export default ProfileInfo;