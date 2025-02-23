
import styles from './App.module.css';
import { resumeData } from './data';
import Education from "./components/Education";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Profile from "./components/Profile";

// Компоненты


function Footer() {
    return null;
}

function App() {
    const {
        profile,
        education,
        projects,
        experience,
        skills,
        certifications
    } = resumeData;

    return (
        <div className={styles.appBackground}>
            <div className={styles.container}>
                {/* Шапка */}
                <Profile profile={profile} />

                {/* Основной контент */}
                <div className={styles.main}>
                    <div className={styles.leftColumn}>

                        <Education education={education} />

                        <Contact contact={profile.contact} />
                    </div>
                    <div className={styles.rightColumn}>
                        <Projects projects={projects} />
                        <Experience experience={experience} />
                        <Skills skills={skills} />
                        <Certifications certifications={certifications} />
                    </div>
                </div>

                {/* Футер */}
                <Footer />
            </div>
        </div>
    );
}

export default App;
