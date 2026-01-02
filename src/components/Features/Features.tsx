import './Features.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { featureSections } from '../../../constants';
import type { FeatureSection } from '../../../constants';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  useGSAP(() => {
    gsap.from('.feature-card', {
      opacity: 0,
      y: 40,
      duration: 0.6,
      ease: 'power3.out',
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.features',
        start: 'top 80%',
      },
    });
  });

  return (
    <section id="features" className="features">
      <h2>Fonctionnalités</h2>

      <div className="features-grid">
        {featureSections.map((section: FeatureSection, index: number) => (
          <div className="feature-card" key={index}>
            <h3>{section.category}</h3>
            <ul>
              {section.items.map((item: string, i: number) => (
                <li key={i}>✅ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
