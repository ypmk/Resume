import React from 'react';
import styles from './Contact.module.css';
import { Contact as ContactType } from '../../data';

interface ContactProps {
    contact: ContactType;
}

const Contact: React.FC<ContactProps> = ({ contact }) => {
    return (
        <section className={styles.contact}>
            <h2 className={styles.title}>Get in Touch</h2>
            <div className={styles.contactInfo}>
                <div className={styles.infoItem}>
                    <span className={styles.icon}>📞</span>
                    <p className={styles.info}><strong>Phone:</strong> {contact.phone}</p>
                </div>
                <div className={styles.infoItem}>
                    <span className={styles.icon}>✉️</span>
                    <p className={styles.info}><strong>Email:</strong> {contact.email}</p>
                </div>
                <div className={styles.infoItem}>
                    <span className={styles.icon}>📍</span>
                    <p className={styles.info}><strong>Location:</strong> {contact.location}</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
