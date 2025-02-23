import React from 'react';
import styles from './Skills.module.css';
import { Skill } from '../../data';

interface SkillsProps {
    skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
    return (
        <section className={styles.skills}>
            <h2 className={styles.title}>Skills</h2>
            <div className={styles.skillGrid}>
                {skills.map((skill, index) => (
                    <div key={index} className={styles.skillItem}>
                        <span className={styles.skillName}>{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
