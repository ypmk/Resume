import React from 'react';
import styles from './Education.module.css';
import { Education as EducationType } from '../../data';

interface EducationProps {
    education: EducationType[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
    return (
        <section className={styles.education}>
            <h2 className={styles.title}>Education</h2>
            <div className={styles.eduList}>
                {education.map((edu, index) => (
                    <div key={index} className={styles.eduItem}>
                        <h3 className={styles.institution}>{edu.institution}</h3>
                        <p className={styles.degree}>{edu.degree}</p>
                        <span className={styles.duration}>{edu.duration}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
