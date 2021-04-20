import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/card">과제 1. 카드 UI</Link>
          </li>
          <li>
            <Link to="/textbox">과제 2. 입력 폼 UI</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
