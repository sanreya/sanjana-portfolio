import { motion, type Variants } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const projects = [
    {
      title: 'Building Segmentation using YOLOv8',
      desc: 'An advanced computer vision application engineered to detect and segment building footprints from high-resolution satellite imagery. Built on custom-trained YOLOv8 segmentation weights, achieving high intersection-over-union scores for complex geometric boundaries.',
      tech: ['YOLOv8', 'Python', 'OpenCV', 'PyTorch'],
      image: '/assets/building_segmentation.png',
      github: '#',
      demo: '#',
    },
    {
      title: 'Skin Cancer Detection',
      desc: 'A deep learning healthcare system that analyzes dermoscopic skin lesion images to classify anomaly severity. Employs convolutional neural networks and transfer learning to predict malignancy risk with validation confidence bounds.',
      tech: ['TensorFlow', 'Python', 'OpenCV', 'Keras'],
      image: '/assets/skin_cancer.png',
      github: '#',
      demo: '#',
    },
    {
      title: 'Heart Disease Prediction',
      desc: 'A machine learning classification pipeline designed to assess patient cardiac disease risk levels based on clinical health indicators. Evaluates random forests, boosting models, and diagnostic correlations with full metrics validation.',
      tech: ['Scikit-learn', 'Python', 'Pandas', 'Matplotlib'],
      image: '/assets/heart_disease.png',
      github: '#',
      demo: '#',
    },
    {
      title: 'Hotel Reservation System',
      desc: 'A premium hospitality SaaS web application. Implements a responsive interactive room booking grid, calendar scheduler dashboards, secure checkouts, and a Spring Boot backend API with a PostgreSQL database.',
      tech: ['React', 'Spring Boot', 'Node.js', 'SQL'],
      image: '/assets/hotel_reservation.png',
      github: '#',
      demo: '#',
    },
    {
      title: 'Virtual Museum Tour (Unity)',
      desc: 'An immersive 3D application developed in Unity allowing users to experience virtual art exhibitions. Features interactive artifact showcases, spatial lighting, and customized VR movement controls in C# scripts.',
      tech: ['Unity', 'C#', '3D Design', 'Virtual Reality'],
      image: '/assets/virtual_museum.png',
      github: '#',
      demo: '#',
    },
  ];

  const listVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 70,
        damping: 15,
      },
    },
  };

  return (
    <section id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="subtitle">Portfolio</span>
          <h2>Featured Projects</h2>
          <p>
            A curated selection of machine learning applications, deep learning classification models, and web architectures I have built.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '2rem' }}
          className="projects-grid"
        >
          {projects.map((project, index) => {
            // First two span 3 columns (half grid), the rest can follow or alternate
            // Let's make it look like a dynamic masonry or bento list:
            // First two: span 3 (half grid on desktop)
            // Next three: span 2 (one-third grid on desktop)
            const gridSpan = index < 2 ? 'span-3-proj' : 'span-2-proj';

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`card-glass project-card ${gridSpan}`}
                style={{
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                {/* Project Image Container */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '240px',
                    overflow: 'hidden',
                    borderTopLeftRadius: 'var(--card-border-radius)',
                    borderTopRightRadius: 'var(--card-border-radius)',
                    backgroundColor: 'var(--bg-tertiary)',
                  }}
                  className="project-image-container"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform var(--transition-slow)',
                    }}
                    className="project-img"
                  />
                  {/* Subtle Accent Glow Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(to top, rgba(9, 13, 22, 0.4) 0%, transparent 100%)',
                      pointerEvents: 'none',
                    }}
                  ></div>
                </div>

                {/* Project Details Content */}
                <div
                  style={{
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    justifyContent: 'space-between',
                    gap: '1.5rem',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {/* Tech Badges */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {project.tech.map((t) => (
                        <span key={t} className="badge" style={{ fontSize: '0.75rem' }}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.25rem' }}>
                      {project.title}
                    </h3>

                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {project.desc}
                    </p>
                  </div>

                  {/* Buttons Row */}
                  <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto' }}>
                    <a
                      href={project.github}
                      className="btn btn-secondary"
                      style={{
                        flex: 1,
                        padding: '0.6rem 1rem',
                        fontSize: '0.85rem',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.4rem',
                      }}
                    >
                      <GithubIcon size={16} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="btn btn-primary"
                      style={{
                        flex: 1,
                        padding: '0.6rem 1rem',
                        fontSize: '0.85rem',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.4rem',
                      }}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Grid specific CSS overrides */}
      <style>{`
        .span-3-proj {
          grid-column: span 3;
        }
        .span-2-proj {
          grid-column: span 2;
        }
        
        .project-card:hover .project-img {
          transform: scale(1.04);
        }
        
        @media (max-width: 1024px) {
          .span-3-proj, .span-2-proj {
            grid-column: span 3;
          }
        }
        @media (max-width: 768px) {
          .projects-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 2rem !important;
          }
          .span-3-proj, .span-2-proj {
            grid-column: unset;
          }
        }
      `}</style>
    </section>
  );
}
