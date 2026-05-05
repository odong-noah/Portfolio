import Head from 'next/head';
import styles from '../styles/Certifications.module.css';

/* ── Issuer logo icons ── */
const CiscoIcon = () => (
  <svg viewBox="0 0 48 28" width="52" height="30" xmlns="http://www.w3.org/2000/svg">
    <rect x="0"  y="10" width="6" height="8" rx="3" fill="#049FD9"/>
    <rect x="7"  y="6"  width="6" height="16" rx="3" fill="#049FD9"/>
    <rect x="14" y="2"  width="6" height="24" rx="3" fill="#049FD9"/>
    <rect x="21" y="6"  width="6" height="16" rx="3" fill="#049FD9"/>
    <rect x="28" y="10" width="6" height="8"  rx="3" fill="#049FD9"/>
    <rect x="35" y="6"  width="6" height="16" rx="3" fill="#049FD9"/>
    <rect x="42" y="10" width="6" height="8"  rx="3" fill="#049FD9"/>
  </svg>
);

const BrighterMondayIcon = () => (
  <svg viewBox="0 0 48 28" width="52" height="30" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="12" fill="#F26522"/>
    <circle cx="34" cy="14" r="12" fill="#E8192C"/>
    <text x="24" y="19" textAnchor="middle" fontFamily="Arial" fontWeight="900" fontSize="11" fill="#fff">BM</text>
  </svg>
);



/* ── Category badge colours ── */
const CATEGORY_COLORS = {
  Cybersecurity:   { bg: 'rgba(239,68,68,0.08)',   border: 'rgba(239,68,68,0.25)',   text: '#ef4444'  },
  'Data Science':  { bg: 'rgba(99,102,241,0.08)',  border: 'rgba(99,102,241,0.25)',  text: '#818cf8'  },
  'Soft Skills':   { bg: 'rgba(34,197,94,0.08)',   border: 'rgba(34,197,94,0.25)',   text: '#22c55e'  },
  Academic:        { bg: 'rgba(212,175,55,0.08)',  border: 'rgba(212,175,55,0.25)',  text: '#d4af37'  },
};

/* ── Certification data ── */
const CERTS = [

  {
    id: 2,
    title: 'Junior Cybersecurity Analyst Career Path',
    issuer: 'Cisco Networking Academy',
    issuerIcon: <CiscoIcon />,
    date: '28 Mar 2026',
    category: 'Cybersecurity',
    description:
      'Advanced cybersecurity program covering the full Junior Cybersecurity Analyst career path — threat intelligence, SOC operations, incident response, log analysis, and security monitoring fundamentals.',
    skills: ['SOC Operations', 'Incident Response', 'Log Analysis', 'Threat Intelligence', 'SIEM'],
    certId: '366bb81d-13ba-4456-a5a1-4f76af6c7e5a',
    badge: null,
    downloadFile: '/certs/junior-cybersecurity.pdf',
    downloadLabel: 'Odong_Noah_Junior_Cybersecurity.pdf',
    verified: true,
  },
  {
    id: 3,
    title: 'Introduction to Data Science',
    issuer: 'Cisco Networking Academy',
    issuerIcon: <CiscoIcon />,
    date: '30 Mar 2026',
    category: 'Data Science',
    description:
      'Explores core data science concepts including data collection, cleaning, exploratory analysis, visualisation, and the fundamentals of machine learning. Provides practical skills for working with data at scale.',
    skills: ['Data Analysis', 'Data Visualisation', 'Machine Learning Basics', 'Python', 'Statistics'],
    certId: 'd7863915-ead4-46b5-8bdf-b3131e0d84a5',
    badge: null,
    downloadFile: '/certs/data-science.pdf',
    downloadLabel: 'Odong_Noah_Data_Science.pdf',
    verified: true,
  },
  {
    id: 4,
    title: 'Uganda Soft Skills Certificate',
    issuer: 'BrighterMonday Uganda · Mastercard Foundation',
    issuerIcon: <BrighterMondayIcon />,
    date: '23 Mar 2026',
    category: 'Soft Skills',
    description:
      'Nationally recognised soft skills programme covering professional communication, teamwork, time management, problem solving, workplace ethics, and career readiness for the Ugandan job market.',
    skills: ['Communication', 'Teamwork', 'Time Management', 'Problem Solving', 'Work Ethic'],
    certId: 'CERT-000000000252',
    certUrl: 'https://www.brightermonday.co.ug/certificate/1dcf0f7e-1f49-490c-b915-56a48bf4dc2e',
    badge: null,
    downloadFile: '/certs/soft-skills.pdf',
    downloadLabel: 'Odong_Noah_Soft_Skills.pdf',
    verified: true,
  },
 
];

/* ── Stats ── */
const STATS = [
  { val: `${CERTS.length}`, label: 'Certificates' },
  { val: '3', label: 'Cisco Certs' },
  { val: '2026', label: 'Latest Year' },
  { val: '100%', label: 'Verified' },
];

export default function Certifications() {
  return (
    <>
      <Head>
        <title>Certifications — Odong Noah</title>
        <meta
          name="description"
          content="Professional certifications earned by Odong Noah — Cisco Networking Academy, BrighterMonday Uganda, and academic credentials."
        />
      </Head>

      <section className={`section ${styles.page}`}>
        <div className="container">

          {/* ── Header ── */}
          <p className="section-label">Credentials</p>
          <h1 className="section-title">
            My <span className="gradient-text">Certifications</span>
          </h1>
          <p className={styles.subtitle}>
            Verified professional certificates and academic credentials from recognised institutions.
          </p>

          {/* ── Stats bar ── */}
          <div className={styles.statsBar}>
            {STATS.map(({ val, label }) => (
              <div key={label} className={styles.stat}>
                <span className={styles.statVal}>{val}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>

          {/* ── Cards ── */}
          <div className={styles.grid}>
            {CERTS.map((cert, i) => {
              const colors = CATEGORY_COLORS[cert.category] || CATEGORY_COLORS.Academic;
              return (
                <article
                  key={cert.id}
                  className={styles.card}
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  {/* Card top row */}
                  <div className={styles.cardTop}>
                    <div className={styles.issuerLogo}>{cert.issuerIcon}</div>
                    <div className={styles.cardMeta}>
                      <span
                        className={styles.category}
                        style={{
                          color: colors.text,
                          background: colors.bg,
                          border: `1px solid ${colors.border}`,
                        }}
                      >
                        {cert.category}
                      </span>
                      {cert.verified && (
                        <span className={styles.verifiedBadge} title="Verified certificate">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="11" height="11">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                          Verified
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Badge image (Cisco intro only) */}
                  {cert.badge && (
                    <div className={styles.badgeWrap}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={cert.badge} alt={`${cert.title} badge`} className={styles.badgeImg} />
                    </div>
                  )}

                  {/* Title & issuer */}
                  <div className={styles.cardBody}>
                    <h2 className={styles.certTitle}>{cert.title}</h2>
                    <p className={styles.certIssuer}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="13" height="13" aria-hidden="true">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      {cert.issuer}
                    </p>
                    <p className={styles.certDate}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="12" height="12" aria-hidden="true">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      {cert.date}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className={styles.divider} />

                  {/* Description */}
                  <p className={styles.certDesc}>{cert.description}</p>

                  {/* Skills */}
                  <div className={styles.skills}>
                    {cert.skills.map((s) => (
                      <span key={s} className="tag">{s}</span>
                    ))}
                  </div>

                  {/* Cert ID */}
                  {cert.certId && (
                    <p className={styles.certId}>
                      <span>ID:</span>{' '}
                      {cert.certUrl ? (
                        <a href={cert.certUrl} target="_blank" rel="noopener noreferrer" className={styles.certIdLink}>
                          {cert.certId}
                        </a>
                      ) : (
                        <span className={styles.certIdVal}>{cert.certId}</span>
                      )}
                    </p>
                  )}

                  {/* Actions */}
                  <div className={styles.actions}>
                    <a
                      href={cert.downloadFile}
                      download={cert.downloadLabel}
                      className={styles.downloadBtn}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14" aria-hidden="true">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                      </svg>
                      Download Certificate
                    </a>
                    <a
                      href={cert.downloadFile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.viewBtn}
                      aria-label={`View ${cert.title} certificate`}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15" aria-hidden="true">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
