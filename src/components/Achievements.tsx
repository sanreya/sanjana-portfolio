import { motion, type Variants } from 'framer-motion';
import { Award, Trophy, CheckCircle } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: <Trophy size={26} style={{ color: 'var(--accent)' }} />,
      title: 'KCET Rank Holder',
      issuer: 'Karnataka Examinations Authority',
      desc: 'Achieved a top ranking in the Karnataka Common Entrance Test (KCET) among hundreds of thousands of candidates, demonstrating excellence in mathematics and analytical subjects.',
      tag: 'Top 0.5% Rank',
    },
    {
      icon: <Award size={26} style={{ color: 'var(--accent)' }} />,
      title: 'Scholarship Recipient',
      issuer: 'Visvesvaraya Technological University',
      desc: 'Awarded merit-based academic scholarships throughout the engineering course in recognition of outstanding GPA performance and active engineering community contribution.',
      tag: 'Merit Honors',
    },
    {
      icon: <CheckCircle size={26} style={{ color: 'var(--accent)' }} />,
      title: 'Technical Certifications',
      issuer: 'Google, Coursera & DeepLearning.AI',
      desc: 'Completed advanced verified specializations covering Deep Neural Networks, Convolutional Models, TensorFlow workflows, OpenCV vision, and Advanced React Web structures.',
      tag: '6+ Credentials',
    },
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: (idx: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 80,
        damping: 15,
        delay: idx * 0.1,
      },
    }),
  };

  return (
    <section id="achievements" style={{ position: 'relative' }}>
      <div className="bg-grid-pattern"></div>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div className="section-header">
          <span className="subtitle">Milestones</span>
          <h2>Key Achievements</h2>
          <p>
            Recognitions, academic honors, and certified competencies earned throughout my educational journey.
          </p>
        </div>

        {/* Achievements Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}
          className="achievements-grid"
        >
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={index}
              className="card-glass"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.5rem',
              }}
            >
              {/* Card Header & Body */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
                    {item.icon}
                  </div>
                  <span className="badge badge-accent" style={{ fontSize: '0.75rem' }}>
                    {item.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.5rem' }}>
                  {item.title}
                </h3>
                
                <span style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 500 }}>
                  {item.issuer}
                </span>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginTop: '0.25rem' }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .achievements-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
