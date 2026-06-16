import { motion } from 'framer-motion';
import { Calendar, GraduationCap, Brain, Code, Eye } from 'lucide-react';

export default function About() {
  const educationTimeline = [
    {
      degree: 'Bachelor of Technology in Computer Science & Engineering',
      institution: 'Alliance University / Specialization in Data Analytics',
      period: '2021 - 2025',
      description: 'Focusing on advanced algorithms, deep learning models, software design, and data structures. Actively participating in AI research projects and leading tech development clubs.',
      highlight: '8.3 CGPA',
    },
    {
      degree: 'Pre-University Education (PCMB)',
      institution: 'PES PU College, Department of Pre-University Education, Karnataka',
      period: '2019 - 2021',
      description: 'Completed board curriculum with focus on Physics, Chemistry, Mathematics, and Biology. Excelled in state-level technical entrance examinations.',
      highlight: '95%',
    },
  ];

  const coreFocus = [
    {
      icon: <Code size={24} style={{ color: 'var(--accent)' }} />,
      title: 'Software Development',
      desc: 'Building scalable full-stack applications with clean architectures, responsive React interfaces, and robust APIs.',
    },
    {
      icon: <Brain size={24} style={{ color: 'var(--accent)' }} />,
      title: 'AI & Machine Learning',
      desc: 'Developing classification, detection, and prediction systems using TensorFlow, PyTorch, and YOLO models.',
    },
    {
      icon: <Eye size={24} style={{ color: 'var(--accent)' }} />,
      title: 'Computer Vision',
      desc: 'Expertise in processing and analyzing visual datasets for medical imaging and segmentation tasks.',
    },
  ];

  return (
    <section id="about" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="subtitle">About Me</span>
          <h2>My Journey & Focus</h2>
          <p>
            Bridging the gap between robust software engineering and state-of-the-art artificial intelligence models.
          </p>
        </div>

        {/* Content Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem' }} className="about-grid">
          {/* Professional Bio & Focus */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <div className="card-glass" style={{ padding: '2.5rem', border: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Professional Summary
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                I am a Software Developer and aspiring AI Engineer with a strong passion for solving real-world challenges through code. My focus is centered on deep learning, computer vision, and building interactive, high-performance web applications.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                Whether it is engineering an object segmentation model to classify building footprints, building medical imaging models, or developing modern full-stack web platforms, I strive to create clean, optimized, and impactful software architectures.
              </p>
            </div>

            {/* Core Competencies Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {coreFocus.map((focus, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    gap: '1.25rem',
                    padding: '1.25rem',
                    borderRadius: '16px',
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--accent-light)',
                      flexShrink: 0,
                    }}
                  >
                    {focus.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                      {focus.title}
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {focus.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <GraduationCap style={{ color: 'var(--accent)' }} />
              Education Timeline
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', position: 'relative', paddingLeft: '1.5rem' }}>
              {/* Timeline center line */}
              <div
                style={{
                  position: 'absolute',
                  left: '4px',
                  top: '8px',
                  bottom: '8px',
                  width: '2px',
                  backgroundColor: 'var(--border-color)',
                }}
              ></div>

              {educationTimeline.map((item, index) => (
                <div key={index} style={{ position: 'relative' }}>
                  {/* Bullet Node */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '-26px',
                      top: '6px',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent)',
                      border: '3px solid var(--bg-secondary)',
                      boxShadow: '0 0 0 4px var(--accent-light)',
                    }}
                  ></div>

                  {/* Course Details Card */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>
                      <Calendar size={14} />
                      <span>{item.period}</span>
                      <span className="badge badge-accent" style={{ marginLeft: 'auto', fontSize: '0.7rem' }}>
                        {item.highlight}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {item.degree}
                    </h4>

                    <span style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 500 }}>
                      {item.institution}
                    </span>

                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: '0.25rem' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
