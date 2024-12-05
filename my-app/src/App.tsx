import './App.css';
import { Routes, Route } from 'react-router-dom';
import { TodoPage } from './pages/TodoPage/Todo';
import { NotFoundPage } from './pages/NotFound/NotFound';
import { SignIn } from './pages/SignIn/SignIn';
import { SignUp } from './pages/SignUp/SignUp';
import { Layout } from './components/Layout/Layout';
//import { AuthRequire } from './hoc/AuthRequire';

function App() {


  return (
    <Routes>
       <Route path='*' element={<NotFoundPage />} />
       <Route path="/" element={<Layout />}>
       <Route index element={<TodoPage />}/>
       <Route path='sign-up' element={<SignUp />} />
       <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
  
}

export default App;

