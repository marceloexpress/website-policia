import { motion } from "framer-motion";

const schedule = [
  { day: "Segunda-feira", time: "18:30", location: "Esquadra de Blayne County" },
  { day: "Sexta-feira", time: "18:30", location: "Esquadra de Blayne County" },
  { day: "Sábado", time: "16:30", location: "Esquadra de Los Santos" },
];

const GunPermitsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="section-centered"
    >
      <div className="container">
        <h1 className="page-title">Portes de Arma</h1>

        {/* Informações */}
        <div className="portes-info-container">
          <div>
            <h2 className="info-title">Introdução</h2>
            <p className="info-text">
              O <strong>Porte de Arma de Fogo</strong> - é um procedimento oficial destinado a avaliar,
              certificar e autorizar o porte legal de arma de fogo. Este processo assegura que o candidato
              possui idoneidade moral, conhecimento técnico e capacidade de atuação responsável.
            </p>
          </div>
          <div className="info-divider" />
          <div>
            <h2 className="info-title">Temas abordados</h2>
            <ul className="list-none p-0 m-0 mb-6">
              <li className="tema-item">Entrevista teórica para análise de perfil e intenções</li>
              <li className="tema-item">Avaliação comportamental e tomada de decisão em situações de risco</li>
              <li className="tema-item">Funcionamento, segurança e manuseamento correto da arma de fogo</li>
              <li className="tema-item">Prova prática em stand de tiro com regras estritas</li>
            </ul>
            <p className="info-note">
              A formação é conduzida por elementos credenciados da DPSA e qualquer infração às normas resulta
              em reprovação imediata.
            </p>
          </div>
        </div>

        {/* Schedule Table */}
        <div className="portes-table-wrap">
          <table className="portes-table">
            <thead>
              <tr>
                <th>Dia</th>
                <th>Horário</th>
                <th>Local</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((s) => (
                <tr key={s.day}>
                  <td>{s.day}</td>
                  <td>{s.time}</td>
                  <td>{s.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Requirements */}
        <div className="requisitos-wrap">
          <h2 className="requisitos-title">Requisitos</h2>
          <ul className="list-none p-0 m-0">
            <li className="requisito-item">Registo criminal limpo</li>
            <li className="requisito-item">Não ter casos/queixas pendentes com o tribunal</li>
            <li className="requisito-item">Atestado médico do SOS válido (com menos de 3 meses)</li>
            <li className="requisito-item">Cartão de cidadão</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default GunPermitsSection;
