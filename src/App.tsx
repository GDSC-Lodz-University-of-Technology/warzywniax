import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export function App() {
  return (
    <nav className='App'>
      <ul>
        <li>
          <Link
            component={RouterLink}
            to='/'
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            component={RouterLink}
            to='/offers'
          >
            Offers
          </Link>
        </li>
        <li>
          <Link
            component={RouterLink}
            to='/shops'
          >
            Shops
          </Link>
        </li>
      </ul>
    </nav>
  );
}
