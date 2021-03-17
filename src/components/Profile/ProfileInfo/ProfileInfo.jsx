import React, { useState } from 'react';
import Preloader from '../../common/preloader/preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userAvatar from '../../../assets/images/avatar.jpg'
import ProfileDataFormReduxForm from './ProfiledataForm/ProfileDataForm';


const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        })

    }

    return <div>
        <div className={classes.descriptionBlock}>
            <img src={profile.photos.large || userAvatar} className={classes.userAvatar} alt="Аватар пользователя" />
            {isOwner && <input type={"file"} onChange={onMainPhotoSelected} className={classes.button} />}
            {editMode ? <ProfileDataFormReduxForm initialValues={profile} onSubmit={onSubmit} profile={profile} /> :
                <ProfileData
                    profile={profile}
                    isOwner={isOwner}
                    goToEditMode={() => { setEditMode(true) }}
                />}
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
    </div>;
}

export const Contact = ({ contactTitle, contactValue }) => {
    return <div className={classes.contact}><b>{contactTitle}:</b>{contactValue}</div>
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return <div>
        {isOwner ? <div><button onClick={goToEditMode}>Edit</button></div> : ``}
        <div>
            <b>Full name:</b> {profile.fullName}
        </div>
        <div>
            <b>Looking for a job:</b> {profile.lookingForAJob ? `Yes` : `No`}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skills:</b> {profile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b>About me:</b> {profile.aboutMe}
        </div>
        <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
        </div>
    </div>
}


export default ProfileInfo;