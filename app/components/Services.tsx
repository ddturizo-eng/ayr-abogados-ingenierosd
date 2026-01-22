'use client';

export default function Services() {
  return (
    <section 
      id="servicios" 
      className="relative min-h-screen flex items-center justify-center"
      style={{ background: '#FFFFFF' }}
    >
      <div className="text-center">
        <h2 
          className="text-6xl font-bold mb-4"
          style={{ color: 'var(--ayr-blue-dark)' }}
        >
          Servicios
        </h2>
        <p 
          className="text-xl"
          style={{ color: 'var(--ayr-gold)' }}
        >
          Jurídicos y Técnicos
        </p>
      </div>
    </section>
  );
}