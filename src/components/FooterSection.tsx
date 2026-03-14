import logo from "@/assets/dpls-logo.png";

const FooterSection = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <img src={logo} alt="Logo DPLS" className="footer-logo" />
        <p className="footer-subtitle">Uma força social e inclusiva</p>
        <div className="footer-divider" />
      </div>
    </footer>
  );
};

export default FooterSection;
