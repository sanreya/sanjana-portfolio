import { motion } from 'framer-motion';
import { BookOpen, Compass, Sparkles, Eye, Layers, BrainCircuit } from 'lucide-react';

export default function LearningInterests() {
  const learningItems = [
    { name: 'Large Language Models', progress: 85, desc: 'Finetuning LLMs, understanding attention mechanisms and transformers.' },
    { name: 'RAG Systems', progress: 75, desc: 'Vector databases (Pinecone, ChromaDB), semantic search, and document chunking.' },
    { name: 'AI Agents', progress: 60, desc: 'Multi-agent frameworks like LangChain, Autogen, and agentic workflows.' },
    { name: 'Advanced React', progress: 90, desc: 'Vite optimization, server components, and performance state management.' },
  ];

  const interestItems = [
    {
      icon: <BrainCircuit size={20} style={{ color: 'var(--accent)' }} />,
      name: 'AI Research',
      desc: 'Exploring foundational architectures and theoretical papers on machine learning advancements.',
    },
    {
      icon: <Eye size={20} style={{ color: 'var(--accent)' }} />,
      name: 'Computer Vision',
      desc: 'Developing specialized models for object segmentation, tracking, and clinical classification.',
    },
    {
      icon: <Layers size={20} style={{ color: 'var(--accent)' }} />,
      name: 'Full Stack Development',
      desc: 'Designing end-to-end applications with secure architectures, cache stores, and robust databases.',
    },
    {
      icon: <Sparkles size={20} style={{ color: 'var(--accent)' }} />,
      name: 'VR Experiences',
      desc: 'Crafting immersive virtual reality environments and interactions using Unity and C# scripting.',
    },
  ];

  return (
    <section id="interests" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="subtitle">Interests</span>
          <h2>Focus & Exploration</h2>
          <p>
            Insights into the technologies I am currently learning and the research directions I am passionate about.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid-bento">
          {/* Currently Learning Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ gridColumn: 'span 6', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            className="card-glass bento-half"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--accent-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <BookOpen size={18} style={{ color: 'var(--accent)' }} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Currently Learning
              </h3>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.5rem' }}>
              Consistently expanding my technical knowledge base in AI engineering and advanced web architectures:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {learningItems.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                      {item.name}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600 }}>
                      {item.progress}%
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div
                    style={{
                      height: '6px',
                      backgroundColor: 'var(--bg-tertiary)',
                      borderRadius: '999px',
                      overflow: 'hidden',
                      position: 'relative',
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                      style={{
                        height: '100%',
                        backgroundColor: 'var(--accent)',
                        borderRadius: '999px',
                      }}
                    ></motion.div>
                  </div>
                  
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Interests Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{ gridColumn: 'span 6', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            className="card-glass bento-half"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--accent-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Compass size={18} style={{ color: 'var(--accent)' }} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Professional Interests
              </h3>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.5rem' }}>
              Areas where I apply my analytical skills, perform research, and develop personal research projects:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="interests-subgrid">
              {interestItems.map((interest, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '1rem',
                    borderRadius: '12px',
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    transition: 'all 0.2s ease',
                  }}
                  className="interest-subcard"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {interest.icon}
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {interest.name}
                    </h4>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                    {interest.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .bento-half {
            grid-column: span 12 !important;
          }
        }
        @media (max-width: 500px) {
          .interests-subgrid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
