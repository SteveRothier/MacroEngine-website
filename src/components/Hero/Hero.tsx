import './Hero.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { heroContent } from '../../../constants';

const Hero = () => {

  // Animation GSAP
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
        <h1>{heroContent.title}</h1>
        <p>{heroContent.subtitle}</p>
        <a href={heroContent.ctaLink} className="btn-primary">
          {heroContent.ctaText}
        </a>
      </div>
    </section>
  );
};

export default Hero;
