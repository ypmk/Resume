import React from 'react';
import styles from './Profile.module.css';
import { Profile as ProfileData } from '../../data';

interface ProfileProps {
    profile: ProfileData;
}

const Profile: React.FC<ProfileProps> = ({ profile }) => {
    const { image, description, name } = profile;

    return (
        <section className={styles.profile}>
            <div className={styles.imageContainer}>
                <img src={image} alt={name} className={styles.profileImage} />
            </div>
            <h2 className={styles.name}>{name}</h2>
            <p className={styles.description}>{description}</p>
        </section>
    );
};

export default Profile;
