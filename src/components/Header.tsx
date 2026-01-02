const Header = () => {
    return (
      <header style={{ padding: "20px", position: "fixed", width: "100%", background: "#1e1e1e", zIndex: 10 }}>
        <nav style={{ display: "flex", gap: "20px" }}>
          <a href="#hero">Accueil</a>
          <a href="#features">Fonctionnalités</a>
          <a href="#download">Téléchargement</a>
        </nav>
      </header>
    );
  };
  
  export default Header;
  