import { navLinks } from '../../constants';

const Header = () => {
    return (
      <header style={{ padding: "20px", position: "fixed", width: "100%", background: "#1e1e1e", zIndex: 10 }}>
        <nav style={{ display: "flex", gap: "20px" }}>
        <div className="nav-links">
          <a href="#home">
            <p>MacroEngine</p>
          </a>
            <ul>
                {navLinks.map((link: { id: string; title: string }) => (
                    <li key={link.id}>
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))}
            </ul>
          </div>
        </nav>
      </header>
    );
  };
  
  export default Header;
  