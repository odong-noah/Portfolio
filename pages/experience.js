import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Experience.module.css';

/* ── Experience & Education data ── */
const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Sparrow Systems UG',
    type: 'Part Time',
    period: 'April 2026 – May 2026',
    duration: '1 months',
    location: 'Entebbe, Uganda',
    link: 'https://sparrowsystems.ug/',
    desc: 'Developed a web-based Asset Manager app using Vanilla Javascript, HTML5 ,Bootstrapcss and PHP. I Wrote technical documentation about the Organization Coding House Standards in Markdown to aid onboarding.',
    skills: ['Vanilla Javascript', 'Bootstrapcss','PHP', 'MySQL','Technical Documentation', 'Git'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
      </svg>
    ),
  },
  {
    role: 'IT Support Officer & Software Developer',
    company: "St. Peter's S.S Naalya",
    type: 'Full-Time',
    period: 'June 2025 – March 2026',
    duration: '9 months',
    location: 'Kampala, Uganda',
    link: 'https://spena.sc.ug/',
    desc: 'Architected a custom, secure and user-friendly School website using the Wordpress CMS. Managed enterprise IT infrastructure, network security protocols, and Google Workspace administration for the institution.',
    skills: ['PHP', 'CSS3','WordPress CMS', 'Root Cause Analysis','Google Workspace', 'Network Security', 'Technical Support'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  
  {
    role: 'Embedded Systems Intern',
    company: 'Fundibots',
    type: 'Internship',
    period: 'June 2024 – Aug 2024',
    duration: '2 months',
    location: 'Mbarara, Uganda',
    link: 'https://fundibots.org/',
    desc: 'Engineered web-based IoT system integrating microprocessors and biometric scanners. Built real-time dashboards to monitor sensor data and automate hardware responses via REST APIs.',
    skills: ['Arduino', 'Microprocessor Prgramming','Micro Python','Node.js', 'REST APIs', 'IoT', 'JavaScript'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.7a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.7z"/>
      </svg>
    ),
  },
  {
    role: 'Software Engineer Intern',
    company: 'CAMTech Uganda',
    type: 'Internship',
    period: 'Sept 2023 – Oct 2023',
    duration: '2 months',
    location: 'Mbarara, Uganda',
    link: 'https://camtechuganda.co.ug/',
    desc: 'Developed solutions using modern Technologies,React, React Native and Laravel. Optimised code for computational efficiency and contributed to the Development of VoiceBot App.',
    skills: ['React Native', 'Laravel','React' ,'Algorithms', 'NLP'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    role: "Bachelor's Degree — Software Engineering",
    company: 'Mbarara University of Science & Technology',
    type: 'Education',
    period: 'Feb 2021 – May 2025',
    duration: '4 years',
    location: 'Mbarara, Uganda',
    link: 'https://www.must.ac.ug/',
    desc: "Graduated with a Bachelor's Degree in Software Engineering. My expertise spans full-stack engineering, Linux systems,Tecnical Support , hardware troubleshooting, database administration, and AI-driven mobile and web-based solutions, always prioritising clean code and proactive system integrity.",
    skills: ['Software Architecture', 'Network Security', 'Linux Systems', 'Database Administration', 'React Native', 'AI/ML','Technical Support'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
];



export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(null);
  const cardRefs = useRef([]);

  /* Subtle scroll parallax on each card */
  useEffect(() => {
    const handleScroll = () => {
      cardRefs.current.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--scroll-shift', `${rect.top * 0.025}px`);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Experience — Odong Noah</title>
        <meta name="description" content="Work experience and education timeline of Odong Noah, Full Stack Developer." />
      </Head>

      {/* ── EXPERIENCE SECTION ── */}
      <section className={styles.page}>
        <div className="container">

          {/* Header */}
          <div className={styles.headerArea}>
            <p className={`section-label`}>My Journey</p>
            <h1 className={styles.pageTitle}>
              Work &amp; <span className={styles.goldText}>Education</span>
            </h1>
            <p className={styles.pageSubtitle}>
              My timeline of roles, internships, and academic milestones that shaped my engineering career.
            </p>
          </div>

          {/* Zig-zag timeline */}
          <div className={styles.timelineContainer}>
            {/* Central spine */}
            <div className={styles.mainLine} aria-hidden="true" />

            {experiences.map((exp, i) => {
              const isLeft  = i % 2 === 0;
              const isActive = activeIndex === i;

              return (
                <div
                  key={i}
                  ref={(el) => (cardRefs.current[i] = el)}
                  className={`${styles.timelineRow} ${isLeft ? styles.leftRow : styles.rightRow}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {/* Spine connector line */}
                  <div className={`${styles.connector} ${isLeft ? styles.connectorLeft : styles.connectorRight}`} aria-hidden="true" />

                  {/* Spine dot */}
                  <div className={`${styles.dot} ${isActive ? styles.activeDot : ''}`} aria-hidden="true" />

                  {/* Card — anchor to company website */}
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.expCard} ${isActive ? styles.poppedCard : ''}`}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`${exp.role} at ${exp.company} — visit website`}
                  >
                    {/* Top: role + duration */}
                    <div className={styles.cardHeader}>
                      <h3 className={styles.roleTitle}>{exp.role}</h3>
                      <div className={styles.durationBadge}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="11" height="11" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                        </svg>
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    {/* Company */}
                    <div className={styles.companyRow}>
                      <span className={styles.iconCircle} aria-hidden="true">{exp.icon}</span>
                      <span className={styles.companyName}>{exp.company}</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12" className={styles.externalIcon} aria-hidden="true">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                      </svg>
                    </div>

                    {/* Meta: type, date, location */}
                    <div className={styles.metaRow}>
                      <span className={`${styles.typeTag} ${exp.type === 'Education' ? styles.typeEdu : exp.type === 'Internship' ? styles.typeIntern : ''}`}>
                        {exp.type}
                      </span>
                      <div className={styles.metaItem}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="11" height="11" aria-hidden="true">
                          <rect x="3" y="4" width="18" height="18" rx="2"/>
                          <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
                          <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        <span>{exp.period}</span>
                      </div>
                      <div className={styles.metaItem}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="11" height="11" aria-hidden="true">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                        </svg>
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className={styles.cardDivider} aria-hidden="true" />

                    {/* Description */}
                    <p className={styles.description}>{exp.desc}</p>

                    {/* Skills */}
                    <div className={styles.skillsFooter}>
                      <span className={styles.skillsLabel}>Skills Earned</span>
                      <div className={styles.skillTags}>
                        {exp.skills.map((skill) => (
                          <span key={skill} className={styles.tag}>{skill}</span>
                        ))}
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

     
    </>
  );
}
