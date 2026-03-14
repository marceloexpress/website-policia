import { motion } from "framer-motion";

const units = [
  {
    name: "CI - Corpo de Intervenção",
    description: "Responsável por fazer controlo de massas em eventos públicos ou privados. Responsável por fazer presença policial em locais públicos quando tal é necessário. Responsável por fazer segurança em julgamentos quando tal é pedido.",
  },
  {
    name: "UTI - Unidade Tática de Intervenção",
    description: "Resposta última da polícia a qualquer crime organizado e situação de tiroteio. A UTI é a unidade tática mais agressiva da polícia e lida com situações de extremo perigo.",
  },
  {
    name: "URI - Unidade de Resposta Imediata",
    description: "Responsável por auxiliar as patrulhas no combate à mão armada e ao crime organizado. A URI é uma unidade móvel rápida com tempos de resposta bastante inferiores a uma patrulha comum.",
  },
];

const SpecialUnitsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="section-standard"
    >
      <div className="container">
        <h1 className="page-title">Unidades Especiais</h1>
        <div className="unidades-grid">
          {units.map((unit) => (
            <div key={unit.name} className="unidade-card">
              <div className="unidade-logo">
                <span className="text-5xl">🛡️</span>
              </div>
              <h3 className="unidade-name">{unit.name}</h3>
              <p className="unidade-desc">{unit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SpecialUnitsSection;
