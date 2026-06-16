import { motion, type Variants } from 'framer-motion';
import { Brain, Code2, Globe, Terminal } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Web Development',
      icon: <Globe size={26} style={{ color: 'var(--accent)' }} />,
      spanClass: 'span-5',
      description: 'Structuring responsive client layers and REST APIs.',
      skills: ['React', 'Node.js', 'Spring Boot', 'Firebase'],
    },
    {
      title: 'AI & Machine Learning',
      icon: <Brain size={26} style={{ color: 'var(--accent)' }} />,
      spanClass: 'span-7',
      description: 'Building deep learning networks, analytical models, and computer vision models.',
      skills: ['TensorFlow', 'Scikit-learn', 'OpenCV', 'YOLOv8', 'Pandas'],
    },
    {
      title: 'Tools & Ecosystem',
      icon: <Terminal size={26} style={{ color: 'var(--accent)' }} />,
      spanClass: 'span-7',
      description: 'Development pipelines, virtualization, and 3D simulation tools.',
      skills: ['Git', 'Docker', 'Linux', 'Unity'],
    },
    {
      title: 'Programming',
      icon: <Code2 size={26} style={{ color: 'var(--accent)' }} />,
      spanClass: 'span-5',
      description: 'Core programming languages for algorithmic problem solving.',
      skills: ['Java', 'Python', 'JavaScript', 'SQL'],
    },
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 80,
        damping: 15,
        delay: index * 0.1,
      },
    }),
  };

  return (
    <section id="skills" style={{ position: 'relative' }}>
      <div className="bg-grid-pattern"></div>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div className="section-header">
          <span className="subtitle">Expertise</span>
          <h2>Technical Skills</h2>
          <p>
            An overview of the programming languages, framework stacks, machine learning libraries, and tools I use.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid-bento">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={index}
              className={`card-glass skill-card ${category.spanClass}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.5rem',
              }}
            >
              <div>
                {/* Header Row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {category.title}
                  </h3>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      backgroundColor: 'var(--accent-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {category.icon}
                  </div>
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                  {category.description}
                </p>
              </div>

              {/* Skills Tags Grid */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="badge badge-accent"
                    style={{
                      padding: '0.4rem 0.9rem',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      borderRadius: '8px',
                      transition: 'all 0.2s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.backgroundColor = 'var(--accent)';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.backgroundColor = 'var(--accent-light)';
                      e.currentTarget.style.color = 'var(--accent)';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Grid specific CSS overrides */}
      <style>{`
        .span-7 {
          grid-column: span 7;
        }
        .span-5 {
          grid-column: span 5;
        }
        @media (max-width: 1024px) {
          .span-7, .span-5 {
            grid-column: span 6;
          }
        }
        @media (max-width: 640px) {
          .span-7, .span-5 {
            grid-column: 1 / -1;
          }
        }
      `}</style>
    </section>
  );
}
