import './Download.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { downloadInfo } from '../../../constants';
import type { DownloadInfo } from '../../../constants';

gsap.registerPlugin(ScrollTrigger);

const Download = () => {
  useGSAP(() => {
    gsap.from('.download-card', {
      opacity: 0,
      y: 40,
      duration: 0.6,
      ease: 'power3.out',
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.download-section',
        start: 'top 80%',
      },
    });
  });

  return (
    <section id="download" className="download-section">
      <h2>Téléchargement</h2>

      <div className="download-grid">
        {downloadInfo.map((item: DownloadInfo, index: number) => (
          <div className="download-card" key={index}>
            {item.icon && <img src={item.icon} alt={`${item.platform} icon`} />}
            <h3>{item.platform}</h3>
            <p>{item.description}</p>
            <a href={item.link} className="btn-download">
              Télécharger
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Download;
