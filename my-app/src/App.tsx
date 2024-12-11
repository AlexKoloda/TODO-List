import './App.css';
import { Routes, Route } from 'react-router-dom';
import { TodoPage } from './pages/TodoPage/Todo';
import { NotFoundPage } from './pages/NotFound/NotFound';
import { SignIn } from './pages/SignIn/SignIn';
import { SignUp } from './pages/SignUp/SignUp';
import { Layout } from './components/Layout/Layout';
import { PrivateRoute } from './hoc/AuthRequire';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hook';
import { selectUser, selectFilters } from './store/selectors';
import { fetchTodos } from './store/todo/todoThunks';
import { fetchUser } from './store/user/userThunks';
import Loading from './components/Loading/Loading';

  

function App() {   
  const user = useAppSelector(selectUser);
  const loading = useAppSelector( (state) => state.users.loading)
  const filters = useAppSelector(selectFilters)
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      dispatch(fetchUser());
    })();
  }, [dispatch]);

  useEffect(() => {
    if(user){
      dispatch(fetchTodos({filter: filters}));
    } 
  }, [dispatch, filters, user]);

  if (loading) {
    return (
      <Loading />
    )
  }

  return (

    <Routes>
       <Route path='*' element={<NotFoundPage />} />
       <Route path='sign-up' element={<SignUp />} />
       <Route path='sign-in' element={<SignIn />} />
      <Route element={<PrivateRoute />}>
       <Route path="/" element={<Layout />}>
       <Route index element={<TodoPage />}/>
      </Route>
      
      </Route>
    </Routes>
  );
  
 }

export default App;


