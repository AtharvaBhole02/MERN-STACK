import React, { useRef, useContext } from 'react'
import { Container, Row, Button } from 'reactstrap'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import "./header.css"
import { AuthContext } from '../../context/AuthContext'


const nav__links = [
   {
      path: '/home',
      display: 'Home'
   },
   
   {
      path: '/tours',
      display: 'Tours'
   },
   
   {
      path: '/Photos',
      display: 'Photos'
   },
   {
      path: '/about',
      display: 'About Us'
   },
]

const Header = () => {
   const headerRef = useRef(null)
   const menuRef = useRef(null)
   const navigate = useNavigate()
   const { user, dispatch } = useContext(AuthContext)

   const logout = () => {
      dispatch({ type: 'Logout' })
      navigate('/')
   }

   

  

   const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

   return (
      <header className='header' ref={headerRef}>
         <Container>
            <Row>
               <div className="nav__wrapper d-flex align-items-center justify-content-between">
                  
                  <div className="logo">
                     <h1>AND Travel Agency</h1>
                  </div>
                 

                 
                  <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                     <ul className="menu d-flex align-items-center gap-5">
                        {
                           nav__links.map((item, index) => (
                              <li className="nav__item" key={index}>
                                 <NavLink to={item.path} className={navClass => navClass.isActive ? 'active__link' : ''}>{item.display}</NavLink>
                              </li>
                           ))
                        }
                     </ul>
                  </div>
                 

                  <div className="nav__right d-flex align-items-center gap-4">
                     <div className="nav__btns d-flex align-items-center gap-2">
                        {
                           user ? <> <h2 className='mb-0'>{user.username}</h2><br /><br /><br />
                                 <Button className='btn btn-dark' onClick={logout}>Logout</Button>
                              </> : <>
                                 <Button className='btn secondary__btn'><Link to='/login'>Login</Link></Button>
                                 <Button className='btn primary__btn'><Link to='/register'>Register</Link></Button>
                              </>
                        }
                        
                     </div>

                     <span className="mobile__menu" onClick={toggleMenu}>
                        <i class="ri-menu-line"></i>
                     </span>
                  </div>
               </div>
            </Row>
         </Container>
      </header>
   )
}

export default Header