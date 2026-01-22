'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Scale, HardHat, FileCheck, Map, ShieldCheck, Briefcase } from 'lucide-react';

const About = () => {

  return (
    <section id="la-firma" className="relative w-full bg-[#0B1120] text-slate-200 py-20 overflow-hidden">
      {/* Elementos de fondo decorativos (Glows) */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-600/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* --- CABECERA DE LA SECCIÓN --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="text-[#C5A466] font-semibold tracking-widest text-sm uppercase mb-2 block">
            Nuestra Esencia
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ingeniería de Precisión y <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A466] to-[#EAD2AC]">
              Seguridad Jurídica
            </span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            A&R Abogados e Ingenieros S.A.S. surge de la necesidad de una visión integral. 
            No solo defendemos casos, estructuramos soluciones donde el sustento técnico 
            blinda la estrategia legal.
          </p>
        </motion.div>

        {/* --- GRID DE PROPUESTA DE VALOR (QUIÉNES SOMOS) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          
          {/* Columna Izquierda: Narrativa */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white border-l-4 border-[#C5A466] pl-4">
              Interdisciplinariedad Real
            </h3>
            <p className="text-slate-300 leading-relaxed text-justify">
              Somos una firma que integra derecho, ingeniería, gestión ambiental, topografía y avalúos. 
              Nuestro enfoque es <strong>preventivo, estratégico y probatorio</strong>. 
            </p>
            <p className="text-slate-300 leading-relaxed text-justify">
              Abordamos conflictos territoriales y proyectos de infraestructura entendiendo que la tierra 
              no es solo un bien jurídico, sino un elemento técnico, ambiental y económico que requiere 
              un análisis especializado.
            </p>
            
            <div className="pt-4">
               <ul className="space-y-3">
                 {[
                   "Defensa Jurídica del Territorio",
                   "Ingeniería Aplicada a Proyectos",
                   "Gestión Predial y Ambiental"
                 ].map((item, index) => (
                   <li key={index} className="flex items-center space-x-3 text-white">
                     <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C5A466]/20 flex items-center justify-center">
                       <ShieldCheck size={14} className="text-[#C5A466]" />
                     </span>
                     <span>{item}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </motion.div>

          {/* Columna Derecha: Tarjetas de Equipo/Experticia */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {/* Card 1 */}
            <ExpertiseCard 
              icon={<Scale size={28} />}
              title="Derecho Especializado"
              desc="Abogados expertos en Derecho de Tierras, Administrativo y SST. Gestión de servidumbres y conflictos prediales."
            />
             {/* Card 2 */}
             <ExpertiseCard 
              icon={<HardHat size={28} />}
              title="Ingeniería & Geología"
              desc="Especialistas en Gestión Ambiental, estudios de suelos, geotecnia y soporte técnico para proyectos viales."
            />
             {/* Card 3 */}
             <ExpertiseCard 
              icon={<Map size={28} />}
              title="Topografía de Precisión"
              desc="Levantamientos topográficos, definición de linderos y verificación técnica para procesos judiciales."
            />
             {/* Card 4 */}
             <ExpertiseCard 
              icon={<FileCheck size={28} />}
              title="Avalúos Certificados"
              desc="Ingeniería de avalúos en 13 categorías. Fines judiciales, comerciales y financieros."
            />
          </motion.div>
        </div>

        {/* --- SECCIÓN DE ENFOQUE ESTRATÉGICO (Bento Grid) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#111827] border border-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A466]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              ¿Por qué elegir A&R? <span className="text-[#C5A466]">Dos Frentes Estratégicos</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800">
              
              {/* Frente 1 */}
              <div className="px-4 py-4 space-y-4">
                <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheck className="text-blue-400" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-white">Defensa Jurídica Sólida</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Nuestra intervención se caracteriza por el uso de <strong>prueba técnica sólida</strong>. 
                  Respaldamos cada actuación jurídica (servidumbres, posesión, actuaciones administrativas) 
                  con evidencia ingenieril irrefutable.
                </p>
              </div>

              {/* Frente 2 */}
              <div className="px-4 py-4 space-y-4">
                <div className="w-12 h-12 bg-yellow-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="text-[#C5A466]" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-white">Respaldo a Proyectos</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Reducimos riesgos legales, técnicos y financieros desde la fase inicial. 
                  Aplicamos la ingeniería del territorio a proyectos viales e inmobiliarios 
                  asegurando su viabilidad normativa.
                </p>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

// Componente auxiliar para las tarjetas pequeñas
interface ExpertiseCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ icon, title, desc }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-[#C5A466]/50 p-6 rounded-xl transition-colors duration-300 group"
  >
    <div className="text-[#C5A466] mb-4 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
    <p className="text-xs text-slate-400 leading-relaxed">
      {desc}
    </p>
  </motion.div>
);

export default About;