import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import { useAuth } from '../hooks/useAuth';

function RequireAuth({ children }) {
  const currentUser = useSelector((state) => state.users.currentUser);

  if (!currentUser) {
    return <Navigate to="login" />;
  }
  // const [userIsAuth] = useAuth();

  // const usersList = useSelector((state) => state.users.users);

  // const token = localStorage.getItem('isAuth');
  // console.log(usersList);
  // const isAccess = usersList.find((user) => user.isAuth === token);
  // console.log(isAccess);
  // const location = useLocation();
  // const [singIn, signOut, isAuth] = useAuth();
  // const isUserAuth = useRef(false);
  // console.log(isUserAuth);

  // useEffect(() => {
  //   const token = localStorage.getItem('isAuth');
  //   // isUserAuth.current = isAuth(token);
  //   // console.log(isUserAuth);
  // }, []);

  // if (!isUserAuth.current) {
  //   console.log('auth is false');
  //   return <Navigate to="/login" state={{ from: location }} />;
  // }

  return children;
}

export { RequireAuth };
