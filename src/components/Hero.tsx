import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
    },
  };

  const handleResumeDownload = () => {
    alert("Resume download triggered! (This simulates downloading Sanjana's resume in a production environment)");
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '8rem',
        paddingBottom: '4rem',
        background: 'radial-gradient(circle at 70% 30%, var(--bg-tertiary) 0%, transparent 70%)',
      }}
    >
      {/* Visual background layers */}
      <div className="bg-grid-pattern"></div>
      <div className="blur-blob blur-blob-1"></div>
      <div className="blur-blob blur-blob-2"></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          {/* Circular Profile Avatar */}
          <motion.div
            variants={itemVariants}
            style={{
              position: 'relative',
              marginBottom: '2rem',
            }}
          >
            <div
              style={{
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                padding: '4px',
                background: 'linear-gradient(135deg, var(--accent) 0%, #3b82f6 100%)',
                boxShadow: 'var(--shadow-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src="/assets/avatar.png"
                alt="Sanjana N Athreya"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  backgroundColor: 'var(--bg-secondary)',
                }}
              />
            </div>
            
            {/* Status indicator bubble */}
            <span
              style={{
                position: 'absolute',
                bottom: '8px',
                right: '8px',
                backgroundColor: 'var(--accent)',
                color: '#fff',
                padding: '0.25rem 0.6rem',
                borderRadius: '999px',
                fontSize: '0.65rem',
                fontWeight: 600,
                border: '3px solid var(--bg-primary)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              Open to Roles
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: '4rem',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
              lineHeight: 1.1,
              background: 'linear-gradient(135deg, var(--text-primary) 30%, var(--accent) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            className="hero-title"
          >
            Hello, I'm Sanjana
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            variants={itemVariants}
            style={{
              fontSize: '1.5rem',
              fontWeight: 500,
              color: 'var(--accent)',
              marginBottom: '1.5rem',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.01em',
            }}
            className="hero-subtitle"
          >
            Software Developer | AI & Machine Learning Enthusiast
          </motion.h2>

          {/* Short Intro */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: '1.15rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '3rem',
              maxWidth: '680px',
            }}
          >
            I build elegant, performant software solutions and apply machine learning algorithms to solve real-world problems. Passionate about computer vision, neural networks, and scalable web engineering.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <a href="#projects" className="btn btn-primary">
              View Projects
              <ArrowRight size={18} />
            </a>
            
            <button onClick={handleResumeDownload} className="btn btn-secondary">
              Download Resume
              <Download size={18} />
            </button>

            <a href="#contact" className="btn btn-secondary" style={{ display: 'inline-flex', gap: '0.5rem' }}>
              Contact Me
              <Mail size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.75rem !important;
          }
          .hero-subtitle {
            font-size: 1.2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
