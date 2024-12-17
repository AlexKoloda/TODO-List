import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import FooterDescription from '../FooterDescription/FooterDescription'



const Layout = () => {
  return(
    <>
    <Header 
    text = {'Список задач'}
    />
    <Outlet />
    <FooterDescription 
      text={'Двойной клик для редактирования'}
      />
    </>
  )
}

export default Layout;