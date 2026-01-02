import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './Hero.css';

const Hero = () => {

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from('.hero h1', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    })
    .from('.hero p', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
    }, '-=0.4')
    .from('.hero .btn-primary', {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: 'power3.out',
    }, '-=0.3');
  });

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

        <a href="#download" className="btn-primary">
          Télécharger pour Windows
        </a>
      </div>
    </section>
  );
};

export default Hero;
