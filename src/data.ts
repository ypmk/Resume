// Описываем интерфейсы данных, чтобы типизировать всё приложение

export interface Contact {
    phone: string;
    email: string;
    location: string;
}

export interface SocialLinks {
    github: string;
    linkedin: string;
    twitter: string;
    facebook: string;
}

export interface Profile {
    name: string;
    role: string;
    image: string;
    description: string;
    contact: Contact;
    socialLinks: SocialLinks;
}

export interface Project {
    title: string;
    description: string;
    link: string;
}

export interface Experience {
    company: string;
    role: string;
    duration: string;
    details: string;
}

export interface Skill {
    name: string;
}

export interface Education {
    institution: string;
    degree: string;
    duration: string;
}

export interface Certification {
    title: string;
    issuer: string;
    year: string;
}

export interface ResumeData {
    profile: Profile;
    projects: Project[];
    experience: Experience[];
    skills: Skill[];
    education: Education[];
    certifications: Certification[];
}

export const resumeData: ResumeData = {
    profile: {
        name: "Ksenia Kopylova",
        role: "Front End Developer / Web Designer",
        image: "/photo.jpg",
        description: "",
        contact: {
            phone: "+79851350704",
            email: "ksusha123@gmail.com",
            location: "Moscow, Russia"
        },
        socialLinks: {
            github: "https://github.com/",
            linkedin: "https://careers.linkedin.cn/",
            twitter: "https://ru.wikipedia.org/wiki/%D0%A2%D0%B2%D0%B8%D1%82%D1%82%D0%B5%D1%80",
            facebook: "http://www.facebook.com.vn/"
        }
    },
    projects: [
        {
            title: "Calculator",
            description: "Math project app",
            link: "https://github.com/ypmk/Calculator"
        },
        {
            title: "Ice Scating shop by React",
            description: "E-commerce app",
            link: "https://github.com/ypmk/Ice_client"
        },
        {
            title: "Ice Scating shop by SpringBoot",
            description: "E-commerce app",
            link: "https://github.com/ypmk/JavaSpringMVCMySQLShop"
        }
    ],
    experience: [
        {
            company: "Tech Company A",
            role: "Front End Developer",
            duration: "2020 - Present",
            details: "Working on various web projects using React, TypeScript, and CSS Modules."
        },
        {
            company: "Tech Company B",
            role: "Web Designer",
            duration: "2018 - 2020",
            details: "Designed user-friendly interfaces and improved UX."
        }
    ],
    skills: [
        { name: "React"},
        { name: "Next.js"},
        { name: "TypeScript"},
        { name: "GraphQL"}
    ],
    education: [
        {
            institution: "MIREA University",
            degree: "Programming engineering",
            duration: "2021 - 2025"
        }
    ],
    certifications: [
        {
            title: "The Complete JavaScript Course",
            issuer: "Udemy",
            year: "2021"
        },
        {
            title: "CSS",
            issuer: "HTML Academy",
            year: "2022"
        }
    ]
};
