import { Navigate, useLocation } from 'react-router-dom'


export const AuthRequire = (children: Element) => {

const location = useLocation();
const authenticate = false; 

if (! authenticate ) {
  return <Navigate to='/sign-in' state={{from: location }} />
}

  return children;
}

