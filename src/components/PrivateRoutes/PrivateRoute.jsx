import { Navigate } from 'react-router-dom';
import { useProfile } from '../ProfileContext/ProfileContext';

const PrivateRoute = ({ children }) => {
  const { userToken } = useProfile();

  return !(userToken) ? <Navigate to="/login" /> : children ;
};

export default PrivateRoute;
