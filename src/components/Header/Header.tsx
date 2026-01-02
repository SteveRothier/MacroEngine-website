import { navLinks } from '../../../constants';
import './Header.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'

const Header = () => {

useGSAP(() => {
  const navTween = gsap.timeline({
    scrollTrigger: {
      trigger: 'nav',
      start: 'bottom top',
      toggleActions: 'play none none reverse',
    },
  });

  navTween.fromTo(
    'nav',
    { 
      backgroundColor: 'transparent',
      backdropFilter: 'blur(0px)',
    },
    {
      backgroundColor: '#00000050',
      backdropFilter: 'blur(10px)',
      duration: 0.6,
      ease: 'power1.inOut',
    }
  );
});

  return (
    <header>
      <nav>
        <div className="nav-left">
          <a href="#home" className="brand">
            <img src="/src/assets/images/logo.png" alt="logo" />
            <p>MacroEngine</p>
          </a>
        </div>

        <ul className="nav-right">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
