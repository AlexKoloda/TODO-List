import './App.css';
import { Routes, Route } from 'react-router-dom';
import  TodoPage  from './pages/TodoPage/Todo';
import  NotFoundPage  from './pages/NotFound/NotFound';
import  SignIn  from './pages/SignIn/SignIn';
import  SignUp  from './pages/SignUp/SignUp';
import  Layout  from './components/Layout/Layout';
import { PrivateRoute } from './hoc/AuthRequire';
import { useEffect, useState } from 'react';
import { useAppDispatch } from './hook';
import { fetchUser } from './store/user/userThunks';
import Loading from './components/Loading/Loading';
import React from 'react';

function App() {
  const [isInitialized, setIsInitialized] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      if (localStorage.getItem('token')) {
        await dispatch(fetchUser());
      }
      setIsInitialized(true);
    })();
  }, [dispatch]);

  if (!isInitialized) {
    return <Loading />;
  }

  return (
    <Routes>
      <Route path='*' element={<NotFoundPage />} />
      <Route path='sign-up' element={<SignUp />} />
      <Route path='sign-in' element={<SignIn />} />
      <Route element={<PrivateRoute />}>
        <Route path='/' element={<Layout />}>
          <Route index element={<TodoPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
