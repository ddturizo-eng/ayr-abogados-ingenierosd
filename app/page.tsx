import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Hero - Landing principal */}
      <Hero />
      
      {/* La Firma - Quiénes somos, dos frentes, equipo, diferencial */}
      <About />
      
      {/* Servicios - Jurídicos y Técnicos integrados */}
      <Services />
      
      {/* Equipo ampliado - Perfiles detallados (opcional si no está en About) */}
      {/* <Team /> */}
      
      {/* Contacto - Formulario y ubicación */}
      <Contact />
    </main>
  );
}