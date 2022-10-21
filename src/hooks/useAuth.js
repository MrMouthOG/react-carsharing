import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';

export function useAuth() {
  const fetchUser = async (token) => {
    const { data } = await axios.get(
      `https://634d1979f5d2cc648e9c558d.mockapi.io/users?search=${token}`,
    );

    return data;
  };

  const isAuth = (children) => {
    const token = localStorage.getItem('isAuth');
    console.log('1 isAuth start with token: ', token);

    if (!token) {
      return false;
    }

    fetchUser(token)
      .then((data) => {
        if (!data.length) {
          console.log('3 Data not exist', data.length);
          return false;
        }
        console.log('3 Data is exist');
        return true;
      })
      .then((answer) => {
        if (!answer) {
          console.log('4 Net takogo');
          return <Navigate to="login" />;
        }
        console.log('4 show lca');
        return children;
      });
  };


  return [isAuth];
}