import { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";

export function useAuth() {
  // const users = useSelector(state => state.users.users);
  // const dispatch = useDispatch();

  const userIsAuth = (user) => {
    return localStorage.getItem('isAuth') === user.isAuth;
  }

  const singIn = (user) => {

  }

  // const userExist = (login, password) => {
  //   const userExist = users.find(user => user.login === login && String(user.password) === password);

  //   if (userExist) {
  //     return userExist
  //   }
  //   return null;
  // }

  // const auth = (token) => {
  //   console.log('auth start');
  //   if (users.find(user => user.isAuth === token)) {
  //     return true;
  //   }
  //   return false;
  // }

  // const isAuth = useCallback(auth, [users]);

  // const singIn = (user) => {
  //   const { id, login, password } = user;
  //   console.log('sing in');

  //   const token = `${id}${login}${password}`;
  //   console.log(token);

  //   const result = { ...user, isAuth: token };

  //   localStorage.setItem('isAuth', token);

  //   dispatch(sendToken(result));
  // }

  // const signOut = () => {
  //   removeCurrentUser();
  // }

  // return [singIn, signOut, isAuth];
  return [userIsAuth];
}