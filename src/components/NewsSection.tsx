import { motion } from "framer-motion";

const NewsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="section-centered"
    >
      <div className="container">
        <h1 className="page-title">Notícias</h1>
        <div className="max-w-[900px] w-full mx-auto">
          <div className="alert-box">
            <p className="alert-message">Sem notícias no momento.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default NewsSection;
