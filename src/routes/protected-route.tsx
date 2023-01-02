import { ROUTES } from '../constants';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({
  component: Component,
}: {
  component: any;
}): JSX.Element {


  // const { isLoggedIn = false } = 'user' || {};
  const isLoggedIn = true;
  return isLoggedIn ? Component : <Navigate to={ROUTES.login} />;
  // return Component;
}

export default ProtectedRoute;
