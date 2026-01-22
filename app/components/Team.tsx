'use client';

export default function Team() {
  return (
    <section 
      id="equipo" 
      className="relative min-h-screen flex items-center justify-center"
      style={{ background: '#FAF8F3' }}
    >
      <div className="text-center">
        <h2 
          className="text-6xl font-bold mb-4"
          style={{ color: 'var(--ayr-blue-dark)' }}
        >
          Equipo
        </h2>
        <p 
          className="text-xl"
          style={{ color: 'var(--ayr-gold)' }}
        >
          Profesionales Especializados
        </p>
      </div>
    </section>
  );
}