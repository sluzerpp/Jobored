import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <Link to={'/'}>Каталог</Link>
      <Link to={'/favorites'}>Избранные</Link>
    </div>
  )
}

export default Header;
