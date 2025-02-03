import { NavLink } from 'react-router';

const navigation = [
  {
    name: 'Home',
    to: '/',
  },
  {
    name: 'Tasks',
    to: 'tasks',
  },
  {
    name: 'Tasks Reducer',
    to: 'tasks-reducer',
  },
];

function Navigation() {
  return (
    <nav>
      <ul className='flex items-center gap-5'>
        {navigation.map((nav) => (
          <li key={nav.name}>
            <NavLink
              className='font-medium text-zinc-400 transition-colors duration-300 hover:text-zinc-100'
              to={nav.to}
            >
              {nav.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
