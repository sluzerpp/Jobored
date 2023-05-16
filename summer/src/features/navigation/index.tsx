import { NavLink } from 'react-router-dom';
import './index.scss';

function getLinkClass({ isActive }: { isActive: boolean }) {
  const def = 'nav__link ';
  if (isActive) {
    return def + 'active';
  }
  return def;
}

export const Navigation = () => {
  return (
    <div className='nav'>
      <NavLink to={'/'} className={getLinkClass}>Поиск вакансий</NavLink>
      <NavLink to={'/favorites'} className={getLinkClass}>Избранные</NavLink>
    </div>
  )
}
