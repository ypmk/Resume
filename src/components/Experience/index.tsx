import React from 'react';
import styles from './Experience.module.css';
import { Experience as ExperienceType } from '../../data';

interface ExperienceProps {
    experience: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
    return (
        <section className={styles.experience}>
            <h2 className={styles.h2}>Work Experience</h2>
            <div className={styles.experienceList}>
                {experience.map((exp, index) => (
                    <div key={index} className={styles.experienceItem}>
                        <div className={styles.header}>
                            <h3 className={styles.company}>{exp.company}</h3>
                            <span className={styles.duration}>{exp.duration}</span>
                        </div>
                        <h4 className={styles.role}>{exp.role}</h4>
                        <p className={styles.details}>{exp.details}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
