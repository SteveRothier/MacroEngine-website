import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {year} MacroEngine. Tous droits réservés.</p>
      <div className="footer-links">
        <a href="#home">Accueil</a>
        <a href="#features">Fonctionnalités</a>
        <a href="#download">Téléchargement</a>
      </div>
    </footer>
  );
};

export default Footer;
