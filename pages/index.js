import Head from 'next/head';
import styles from '../styles/Home.module.css';

/* 
  Using the Simple Icons CDN (https://simpleicons.org/)
*/
const skills = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript' },
      { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript' },
      { name: 'Python', icon: 'https://cdn.simpleicons.org/python' },
      { name: 'PHP', icon: 'https://cdn.simpleicons.org/php' },
      { name: 'Dart', icon: 'https://cdn.simpleicons.org/dart' },
      { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5' },
      { name: 'SQL', icon: 'https://cdn.simpleicons.org/mysql' },
      { name: 'Kotlin', icon: 'https://cdn.simpleicons.org/kotlin' },
    ],
  },
  {
    category: 'Frontend and Backend Frameworks',
    items: [
      { name: 'React js', icon: 'https://cdn.simpleicons.org/react' },
      { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/white' },
      { name: 'Bootstrap', icon: 'https://cdn.simpleicons.org/bootstrap' },
      { name: 'Laravel', icon: 'https://cdn.simpleicons.org/laravel' },
      { name: 'Tailwindcss', icon: 'https://cdn.simpleicons.org/tailwindcss' },
      { name: 'Django', icon: 'https://cdn.simpleicons.org/django' },
    ],
  },
  {
    category: 'Mobile Frameworks',
    items: [
      { name: 'React Native', icon: 'https://cdn.simpleicons.org/react' },
      { name: 'Flutter', icon: 'https://cdn.simpleicons.org/flutter' },
    ],
  },
  {
    category: 'Networking & State Management',
    items: [
      { name: 'Provider', icon: 'https://cdn.simpleicons.org/flutter/02569B' },
      { name: 'Dio', icon: 'https://cdn.simpleicons.org/blueprint/00B4AB' },
      { name: 'Axios', icon: 'https://cdn.simpleicons.org/axios' },
      { name: 'Fetch API', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    ],
  },
  {
    category: 'Backend & Cloud',
    items: [
      { name: 'FastAPI', icon: 'https://cdn.simpleicons.org/fastapi' },
      { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs' },
      { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql' },
      { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql' },
      { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase' },
      { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb' },
    ],
  },
  {
    category: 'DevOps & Tools',
    items: [
      { name: 'Git', icon: 'https://cdn.simpleicons.org/git' },
      { name: 'GitHub Actions', icon: 'https://cdn.simpleicons.org/githubactions' },
      { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker' },
      { name: 'Notion', icon: 'https://cdn.simpleicons.org/notion' },
      { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma' },
      { name: 'Cloudinary', icon: 'https://cdn.simpleicons.org/cloudinary' },
      { name: 'Kubernetes', icon: 'https://cdn.simpleicons.org/kubernetes' },
      { name: 'Jenkins', icon: 'https://cdn.simpleicons.org/jenkins' },
    ],
  },
];

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="32" height="32">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
        <path d="M9 6h6M9 10h6" />
      </svg>
    ),
    title: 'Cross-Platform Mobile Development',
    desc: 'Building high-performance iOS & Android apps using React Native and Flutter, with clean architecture and native UX.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="32" height="32">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M7 8l3 3-3 3M13 14h4" />
        <path d="M8 21h8" />
      </svg>
    ),
    title: 'Full-Stack Web Development',
    desc: 'End-to-end web solutions with React/Next.js frontends backed by Laravel, Django and Express js for APIs, optimized for scale.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="32" height="32">
        <rect x="2" y="5" width="20" height="8" rx="2" />
        <rect x="2" y="13" width="20" height="8" rx="2" />
        <path d="M6 9h.01M6 17h.01" />
      </svg>
    ),
    title: 'IT Technical Support',
    desc: 'Delivering professional IT support and infrastructure management with a focus on network security, proactive hardware maintenance, and resilient enterprise environments.',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Odong Noah</title>
        <meta name="description" content="Full Stack Developer specialising in web and mobile apps — Uganda." />
      </Head>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <p className={`section-label ${styles.heroLabel}`}>Available for opportunities</p>
            <h1 className={styles.heroName}>
              ODONG<br /><span className="gradient-text">NOAH</span>
            </h1>
            <p className={styles.heroRole}>Full Stack Software Developer & IT Support Professional</p>
            <p className={styles.heroBio}>
              Experienced Full-Stack Developer specialising in web and mobile applications. Skilled in Flutter, React, React Native, Laravel, Next.js and Django.
            </p>
            <p className={styles.heroBio}>
              Beyond development, I manage IT infrastructure specializing in network security, system administration, and hardware troubleshooting. I ensure peak system
              performance and data integrity through proactive maintenance of cloud and enterprise environments.
            </p>

            <div className={styles.heroActions}>
              <a href="/projects" className="btn-primary">View Projects</a>
              <a href="/resume.pdf" download="Odong_Noah_Resume.pdf" className="btn-outline">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
                Download Resume
              </a>
            </div>
            
            <div className={styles.heroSocials}>
              {[
                { href: 'mailto:noahodong6@gmail.com', label: 'Email', path: <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></> },
                { href: 'https://github.com/odong-noah', label: 'GitHub', path: <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/> },
                { href: 'https://www.linkedin.com/in/odong-noah-6028bb3a8/', label: 'LinkedIn', path: <><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></> },
              ].map(({ href, label, path }) => (
                <a key={label} href={href} className={styles.socialBtn} aria-label={label} target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">{path}</svg>
                </a>
              ))}
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.avatarRing}>
              <div className={styles.avatarInner}>
                {/* ── ROTATING IMAGE LOGIC ── */}
                <img 
                  src="/profile.jpg" 
                  alt="Odong Noah" 
                  className={styles.avatarPhoto}
                />
              </div>
            </div>
            <div className={styles.floatBadge1}>
              <span>Full Stack Developer</span>
            </div>
            <div className={styles.floatBadge2}>
              <span className={styles.dot} />
              <span>Open to Work</span>
            </div>
          </div>
        </div>
        <div className={styles.heroGrid} aria-hidden />
      </section>

      {/* ── ABOUT ME ── */}
      <section className={`section ${styles.about}`}>
        <div className="container">
          <p className="section-label">Who I am</p>
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <p>A fast Learning and motivated Full-Stack Software Developer and IT Support Professional based in Uganda, specialising in building high-quality, user-friendly and secure web and mobile applications.</p>
              <p>I've worked at St.Peter's S.S Naalya as a Systems Developer and Database Administrator and at Fundi Robotics as a Backend Developer student Intern.</p>
              <p>I'm passionate about clean code, developer experience, and creating seamless user interfaces that work beautifully across every device.</p>
            </div>
            <div className={styles.aboutStats}>
              {[
                { val: '2+', label: 'Years Experience' },
                { val: '10+', label: 'Projects Shipped' },
                { val: '10+', label: 'Technologies' },
                { val: '3', label: 'Companies' },
              ].map(({ val, label }) => (
                <div key={label} className={styles.statCard}>
                  <span className={styles.statVal}>{val}</span>
                  <span className={styles.statLabel}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── FIXED ORGANIZATION */}
      <section className={`section ${styles.skillsSection}`}>
        <div className="container">
          <p className="section-label">Technical Expertise</p>
          <h2 className="section-title">Skills &amp; <span className="gradient-text">Technologies</span></h2>
          
          <div className={styles.skillsStack}>
            {skills.map(({ category, items }) => (
              <div key={category} className={styles.skillBlock}>
                <h3 className={styles.skillCategoryTitle}>{category}</h3>
                
                <div className={styles.skillRow}>
                  {items.map(({ name, icon }) => (
                    <div key={name} className={styles.skillChip}>
                      <div className={styles.chipIcon}>
                        <img 
                          src={icon} 
                          alt={name} 
                          style={{ width: '18px', height: '18px', objectFit: 'contain' }} 
                        />
                      </div>
                      <span className={styles.chipName}>{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <p className="section-label">What I offer</p>
          <h2 className="section-title">My <span className="gradient-text">Services</span></h2>
          <div className={styles.servicesGrid}>
            {services.map(({ icon, title, desc }) => (
              <div key={title} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{icon}</div>
                <h3 className={styles.serviceTitle}>{title}</h3>
                <p className={styles.serviceDesc}>{desc}</p>
                <div className={styles.serviceHover} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}