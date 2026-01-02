import { navLinks } from '../../../constants';
import './Header.css';

const Header = () => {
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
