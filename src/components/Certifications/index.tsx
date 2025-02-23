import React from 'react';
import styles from './Certifications.module.css';
import { Certification } from '../../data';

interface CertificationsProps {
    certifications: Certification[];
}

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
    return (
        <section className={styles.certifications}>
            <h2 className={styles.title}>Certifications</h2>
            <div className={styles.certificationGrid}>
                {certifications.map((cert, index) => (
                    <div key={index} className={styles.certificationItem}>
                        <h3 className={styles.certTitle}>{cert.title}</h3>
                        <p className={styles.certIssuer}>Issuer: {cert.issuer}</p>
                        <span className={styles.certYear}>Year: {cert.year}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
