import { motion } from "framer-motion";
import { useState } from "react";

const faqItems = [
  { q: "Como tirar a pulseira Eletrónica?", a: "Deve abrir ticket no portal do Campus da Justiça na aba \"Secretaria geral\" e aguarda resposta." },
  { q: "Como tirar licença de caça?", a: "Deve se dirigir ao Posto Florestal (Paleto Bay). Caso não encontre nenhum agente deve fazer um 112 a indicar o que pretende e aguarde." },
  { q: "Como retiro o meu carro dos apreendidos?", a: "Dirija-se a uma das esquadras preferencialmente com os seus documentos (CC e Carta de condução) e fale com um agente." },
  { q: "Como abrir um queixa?", a: "Caso queira apresentar uma queixa formal deve dirigir-se a uma esquadra e registá-la com um agente." },
  { q: "Como abrir uma queixa contra um agente?", a: "Caso pretenda fazê-lo contra um agente deve ir à esquadra contrária à do agente." },
  { q: "Quais os documentos obrigatórios que devo ter em posse?", a: "Cartão de cidadão, carta de condução (Se estiver a conduzir um veículo), Porte de Arma Branca (Se tiver uma arma branca legal em sua posse). Porte de arma de fogo (Se tiver uma arma de fogo legal em sua posse)." },
  { q: "Quais as armas legais que posso portar?", a: "Porte de arma de fogo (Vintage) | Porte de arma branca (Faca)" },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="section-standard"
    >
      <div className="container">
        <h1 className="page-title">FAQ - Perguntas Frequentes</h1>
        <div className="faq-container">
          {faqItems.map((item, i) => (
            <div key={i} className="faq-item">
              <button
                className="faq-question-btn"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <h3>{item.q}</h3>
                <span
                  className="faq-icon"
                  style={{ transform: openIndex === i ? "rotate(45deg)" : "none" }}
                >
                  +
                </span>
              </button>
              <div
                className="faq-answer"
                style={{
                  maxHeight: openIndex === i ? "500px" : "0",
                  transition: "max-height 0.3s ease-out",
                }}
              >
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQSection;
