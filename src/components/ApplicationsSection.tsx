import { motion } from "framer-motion";

const icRequirements = [
  "Idade: Igual ou superior a 18 anos.",
  "Registo Criminal: Inexistente.",
  "Habilitações: Carta de condução de ligeiros, motociclos e pesados.",
  "Não ter casos/queixas pendentes com o tribunal.",
  "Fato de treino (branco) - Recrutamento Aberto",
];

const entryMethods = [
  { title: "Recrutamento aberto", desc: "Realizado no Forte Zancudo mediante marcação prévia tendo por base provas práticas." },
  { title: "Candidatura", desc: "As candidaturas estão sempre abertas sendo anunciados os resultados periodicamente. (tempo médio 1 semana)" },
  { title: "Entrevista", desc: "Feitas esporadicamente na esquadra de Vespucci." },
];

const ApplicationsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="section-centered"
    >
      <div className="container">
        <h1 className="page-title">Candidaturas</h1>
        <div className="candidaturas-wrap">
          <div className="candidaturas-content">
            <h2 className="candidaturas-intro-title">Introdução</h2>
            <p className="candidaturas-intro">
              Faz a diferença, protege quem precisa e sente orgulho em cada ação. A DPLS espera por ti.
            </p>

            <h2 className="candidaturas-subtitle">Requisitos <strong>(IC)</strong></h2>
            <ul className="candidaturas-list">
              {icRequirements.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>

            <h2 className="candidaturas-subtitle">Formas de ingresso</h2>
            <div className="flex flex-col gap-5 w-full">
              {entryMethods.map((m) => (
                <p key={m.title} className="candidaturas-text">
                  <strong>{m.title}</strong> - {m.desc}
                </p>
              ))}
            </div>

            <a
              href="https://docs.google.com/forms"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-candidatura"
            >
              Candidatar-me
              <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ApplicationsSection;
