import { Link } from 'react-router-dom';
import { formatNumber } from '../utils/formatNumber';

const Navbar = ({ total = 0 }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white px-4 py-2">
      <div className="container-fluid d-flex flex-wrap justify-content-between align-items-center gap-2">
        <Link to="/" className="navbar-brand mb-0">
          ¡Pizzería Mamma Mia!
        </Link>

        <div className="d-flex flex-wrap gap-2 order-3 order-lg-2">
          <Link to="/" className="btn btn-outline-light btn-sm">
            🍕 Inicio
          </Link>
          <Link to="/profile" className="btn btn-outline-light btn-sm">
            🔓 Perfil
          </Link>
          <Link to="/login" className="btn btn-outline-light btn-sm">
            🔐 Iniciar Sesión
          </Link>
          <Link to="/register" className="btn btn-outline-light btn-sm">
            🔐 Registrarse
          </Link>
        </div>

        <Link to="/cart" className="btn btn-outline-info btn-sm order-2 order-lg-3">
          🛒 Total: ${formatNumber(total)}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
