'use client';

export default function Contact() {
  return (
    <section 
      id="contacto" 
      className="relative min-h-screen flex items-center justify-center"
      style={{ 
        background: 'linear-gradient(135deg, var(--ayr-blue-dark) 0%, var(--ayr-blue) 100%)' 
      }}
    >
      <div className="text-center">
        <h2 
          className="text-6xl font-bold mb-4 text-white"
        >
          Contacto
        </h2>
        <p 
          className="text-xl"
          style={{ color: 'var(--ayr-gold)' }}
        >
          Hablemos de tu caso
        </p>
      </div>
    </section>
  );
}