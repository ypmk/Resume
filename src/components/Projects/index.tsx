import React from 'react';
import styles from './Projects.module.css';
import { Project } from '../../data';

interface ProjectsProps {
    projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
    return (
        <section className={styles.projects}>
            <h2 className={styles.title}>My Projects</h2>
            <div className={styles.projectsGrid}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.projectItem}>
                        <div className={styles.header}>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <a
                                className={styles.link}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View
                            </a>
                        </div>
                        <p className={styles.description}>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
