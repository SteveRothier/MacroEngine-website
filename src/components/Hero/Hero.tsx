import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>
          Automatisez vos actions<br />
          avec <span>MacroEngine</span>
        </h1>

        <p>
          MacroEngine vous permet de créer et exécuter des macros
          simplement pour gagner du temps sur Windows.
        </p>

        <div className="hero-actions">
          <a href="#download" className="btn-primary">
            Télécharger pour Windows
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
