import React from 'react';
import styles from './Header.module.css';
import { Profile } from '../../data';

interface HeaderProps {
    profile: Profile;
}

const Header: React.FC<HeaderProps> = ({ profile }) => {
    const { name, role, socialLinks } = profile;

    return (
        <header className={styles.header}>
            <div className={styles.nameContainer}>
                <h1>{name}</h1>
                <h2>{role}</h2>
            </div>
            <div className={styles.socialLinks}>
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                        alt="GitHub"
                    />
                </a>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
                        alt="LinkedIn"
                    />
                </a>
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                        alt="Twitter"
                    />
                </a>
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                        alt="Facebook"
                    />
                </a>
            </div>
        </header>
    );
};

export default Header;
