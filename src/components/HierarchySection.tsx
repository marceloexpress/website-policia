import React from "react";
import { motion } from "framer-motion";

const directors = [
  { name: "Nathan Quack", rank: "Diretor Nacional" },
  { name: "Cesar Cohen", rank: "Diretor Nacional Adjunto" },
];

const sections = [
  {
    title: "Direção",
    ranks: ["Diretor Nacional", "Diretor Nacional Adjunto"],
    isFirst: true,
  },
  {
    title: "Oficiais",
    ranks: ["Superintendente Chefe", "Superintendente", "Intendente", "Subintendente", "Comissário", "Subcomissário"],
  },
  {
    title: "Chefes",
    ranks: ["Chefe Coordenador", "Chefe Principal", "Chefe"],
  },
  {
    title: "Agentes",
    ranks: ["Agente Coordenador", "Agente Principal", "Agente", "Recruta"],
  },
];

const HierarchySection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="section-centered"
    >
      <div className="container">
        <h1 className="page-title">Hierarquia</h1>
        <div className="hierarchy-layout">
          {/* Diretor Nacional */}
          <div className="director-card">
            <div className="director-avatar">
              <div className="director-avatar-placeholder">
                <span className="text-5xl font-bold" style={{ color: "hsl(var(--accent))" }}>
                  {directors[0].name[0]}
                </span>
              </div>
            </div>
            <h3 className="director-name">{directors[0].name}</h3>
            <p className="director-rank">{directors[0].rank}</p>
          </div>

          {/* Table */}
          <div className="hierarchy-table-container">
            <table className="hierarchy-table">
              <thead>
                <tr>
                  <th>Patente</th>
                </tr>
              </thead>
              <tbody>
                {sections.map((section) => (
                  <React.Fragment key={section.title}>
                    <tr>
                      <td className={`section-header-cell ${section.isFirst ? "section-header-cell-first" : ""}`}>
                        {section.title}
                      </td>
                    </tr>
                    {section.ranks.map((rank) => (
                      <tr key={rank}>
                        <td>{rank}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Diretor Nacional Adjunto */}
          <div className="director-card">
            <div className="director-avatar">
              <div className="director-avatar-placeholder">
                <span className="text-5xl font-bold" style={{ color: "hsl(var(--accent))" }}>
                  {directors[1].name[0]}
                </span>
              </div>
            </div>
            <h3 className="director-name">{directors[1].name}</h3>
            <p className="director-rank">{directors[1].rank}</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HierarchySection;
