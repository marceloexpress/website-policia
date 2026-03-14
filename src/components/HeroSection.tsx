import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";
import momentoEsquadra from "@/assets/momento-esquadra.jpg";
import momentoEvento from "@/assets/momento-evento.jpg";
import momentoUnidade from "@/assets/momento-unidade.jpg";

const stats = [
  { value: "24/7", label: "PATRULHAMENTO" },
  { value: "100%", label: "COMPROMISSO" },
  { value: "+50", label: "OPERACIONAIS" },
];

const momentos = [
  { src: momentoEsquadra, alt: "Esquadra" },
  { src: momentoEvento, alt: "Evento" },
  { src: momentoUnidade, alt: "Unidade" },
];

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text-wrap">
              <span className="hero-badge">DEPARTAMENTO POLÍCIA</span>
              <h1 className="hero-title">Bem-Vindo</h1>
              <p className="hero-desc">
                Protegemos e servimos a comunidade Los Santos com dedicação e profissionalismo. Comprometidos
                com a segurança e o bem-estar de todos os cidadãos.
              </p>
              <div className="hero-stats">
                {stats.map((s) => (
                  <div key={s.label} className="hero-stat">
                    <div className="hero-stat-number">{s.value}</div>
                    <div className="hero-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-img-wrap">
              <img src={heroImage} alt="Viaturas Policiais" className="hero-img" />
              <p className="hero-quote">
                “Não abandonem este sonho, ao desistir, não é apenas o esforço que se perde, mas o próprio sonho que se apaga.” – 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Momentos */}
      <section className="relative z-[1]" style={{ padding: "80px 0" }}>
        <div className="container">
          <h2 className="momentos-title">Momentos</h2>
          <div className="momentos-grid">
            {momentos.map((m) => (
              <div key={m.alt} className="momentos-card">
                <img src={m.src} alt={m.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HeroSection;
