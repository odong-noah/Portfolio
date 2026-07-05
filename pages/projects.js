import Head from 'next/head';
import styles from '../styles/Projects.module.css';

const projects = [
  {
    title: 'Learn Luganda Mobile App',
    desc: "A React Native mobile application built with TypeScript, designed to make learning Luganda accessible to anyone on the go. Developed in response to Uganda's growing influx of foreign tourists and migrants, the app addresses the language barrier between visitors and locals by providing an intuitive, mobile-assisted language learning experience. Inspired by platforms like Duolingo.",
    tags: ['React Native', 'MySQL', 'Node.js', 'Offline Sync','AI/ML','NLP'],
    type: 'Mobile App',
    year: '2025',
    link: 'https://github.com/odong-noah',
  },
  {
    title: 'Media Asset Manager',
    desc: 'A web-based media management app that lets users upload images and videos, then apply custom transformations, such as resizing, cropping, and filters directly in the browser. Built with Vanilla JavaScript, HTML, and Bootstrap on the frontend, PHP on the backend, Cloudinary for cloud media storage and transformation, and MySQL for storing references to uploaded assets.',
    tags: ['Vanilla Javascript', 'HTML', 'Bootstrap CSS', 'Cloudinary', 'MYSQL'],
    type: 'Web App',
    year: '2026',
    link: 'https://www.grtdevsrv.com/2024_sparrow_ug_2025b/Joshua/cloudinary/index.php',
  },
  {
    title: 'Crop-Advisor App',
    desc: "An intelligent crop recommendation app that analyzes real-time weather conditions and soil nutrient levels to suggest the most suitable crops for a given farm. Farmers input or receive data on rainfall, temperature, humidity, and soil nutrients — Nitrogen, Potassium, and Phosphorus — and the app returns a primary crop recommendation alongside two alternatives, exported as a clean PDF report.",
    tags: ['React', 'Tailwindcss', 'AI/ML', 'Micropython'],
    type: 'Web App',
    year: '2024',
    link: 'https://github.com/odong-noah/Crop-Advisor-FrontEnd',
  },
  {
    title: "St. Peter's Naalya Secondary School Website",
    desc: "Collaborated on the design and deployment of the official website for St. Peter's Naalya Secondary School (spena.sc.ug). Built on WordPress CMS, the site serves as the school's digital presence,covering admissions, academics, co-curricular activities, news, fees structure, and community engagement. Focused on security hardening and delivering a clean, user-friendly experience accessible to students, parents, and staff.",
    tags: ['WordPress CMS', 'PHP', 'CSS', 'Web Security', 'UI/UX'],
    type: 'Web App',
    year: '2025',
    link: 'https://spena.sc.ug/',
  },
  {
    title: 'Mobile Authentication System',
    desc: 'A secure mobile authentication system built with React Native and TypeScript, backed by a Laravel PHP API. Ensures only authorized users can access the application by enforcing email verification and rejecting unverified addresses at registration. Supports password reset via OTP sent to verified emails, Firebase Realtime Database for live auth state management, and SQLite for offline support.',
    tags: ['React Native', 'Laravel', 'PHP', 'FireBase Realtime Database','SQLITE'],
    type: 'Mobile App',
    year: '2025',
    link: 'https://github.com/odong-noah/mobileAuthApplication',
  },
  {
    title: 'Portfolio Website',
    desc: 'A personal developer portfolio built with Next.js, featuring server-side rendering, smooth animations, and a fully responsive layout across all devices. Showcases projects, skills, and contact functionality powered by FormSpree — deployed and hosted on Vercel.',
    tags: ['Next.js', 'React', 'CSS Modules','FormSpree'],
    type: 'Web App',
    year: '2026',
    link: 'https://odong-noah-portfolio.vercel.app/',
  },
  {
    title: 'Library Management System',
    desc: 'A web-based library management system designed to digitize school library operations, replacing traditional paper ledgers with a streamlined digital dashboard. The application automates the entire circulation lifecycle—including book inventory management, member registration, and automated fine calculations for overdue returns. Built with Vanilla JavaScript, HTML, and Bootstrap 5 on the frontend, PHP on the backend, and MySQL for secure data storage and activity logging, with Chart.js for real-time visual statistics.',
    tags: ['Vanilla JavaScript', 'Boostrap CSS','PHP','MYSQL','HTML'],
    type: 'Web App',
    year: '2026',
    link: 'https://github.com/odong-noah/Library_management_system',
  },
  {
    title: 'Student Attendance System',
    desc: 'A comprehensive full-stack web application designed to digitize and automate attendance tracking across four academic programs (Software Engineering, IT, Computer Science, and Information Systems). The system moves beyond simple record-keeping by using automated database triggers to "flag" at-risk students, providing administrators with actionable data to improve student retention.',
    tags: ['Vanilla JavaScript', 'Boostrap CSS','PHP','MYSQL','HTML'],
    type: 'Web App',
    year: '2026',
    link: 'https://github.com/odong-noah/Attendance_system',
  },
];

const typeColors = {
  'Mobile App': '#d4af37',
  'Backend': '#38bdf8',
  'Web App': '#2dd4bf',
  'Web': '#a78bfa',
};

export default function Projects() {
  return (
    <>
      <Head><title>Projects — Odong Noah</title></Head>
      <section className={`section ${styles.page}`}>
        <div className="container">
          <p className="section-label">Portfolio</p>
          <h1 className="section-title">Featured <span className="gradient-text">Projects</span></h1>
          <p className={styles.subtitle}>A selection of work across mobile, web, and backend engineering.</p>
          <div className={styles.grid}>
            {projects.map(({ title, desc, tags, type, year, link }) => (
              <div key={title} className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.typeTag} style={{ color: typeColors[type] || '#d4af37', borderColor: `${typeColors[type] || '#d4af37'}33` }}>
                    {type}
                  </span>
                  <span className={styles.year}>{year}</span>
                </div>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDesc}>{desc}</p>
                <div className={styles.tags}>
                  {tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <div className={styles.cardFooter}>
                  <a href={link} target="_blank" rel="noopener noreferrer" className={styles.viewBtn}>
                    View Project
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
                  </a>
                  <a href="#" className={styles.ghBtn} aria-label="GitHub">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
